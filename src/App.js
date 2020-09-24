import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Something from './views/Something';
import Blog from './views/Blog';
import BlogPost from './components/BlogPost';
import Cart from './views/Cart';
import Marketplace from './views/Marketplace';
import './/App.css';
import './/custom.css';


export default class App extends Component {
  constructor() {
    // console.log("Constructed")
    super();

    this.state = {
      employees: [],
      employeeInformation: {},
      products: [],
      cart: []
    }
  }

  componentDidMount() {
    // console.log("Mounted")
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          employees: data
        })
      })

    fetch('http://localhost:5000/api/shop')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  handleSelectEmployee = (empObj) => {
    this.setState({
      employeeInformation: empObj
    })
    // console.log(empObj);
  }

  handleAddToCart = productObj => {
    this.setState({
      cart: this.state.cart.concat(productObj)
    })
  }

  render() {
    // console.log("Rendered")
    return (
      <div>
        <Header />

        <main>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Main employees={this.state.employees} handleSelectEmployee={this.handleSelectEmployee} employeeInformation={this.state.employeeInformation} />} />
              <Route exact path="/something" render={() => <Something />} />
              <Route exact path="/blog" render={() => <Blog />} />
              <Route exact path="/blog/:postId" render={({ match }) => <BlogPost match={match} />} />
              <Route exact path='/cart' render={() => <Cart />} />
              <Route exact path='/marketplace' render={() => <Marketplace products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}