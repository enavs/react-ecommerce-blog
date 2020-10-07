import React, { Component } from 'react'
import Employees from '../components/Employees'
import InformationList from '../components/InformationList'
import SkillList from '../components/SkillList'

import '../custom.css';

export default class Main extends Component {
    render() {
        // let employees = this.props.employees;
        // console.log(employees);

        return (
            <div className="row">
              <div className="card-deck">
                <div id="employees-container" className="card" style={{ width: "400px"}}>
                  <Employees employees={this.props.employees} handleSelectEmployee={this.props.handleSelectEmployee} />
                </div>
                <div id="information-container" className="card" style={{ width: "400px"}}>
                  <InformationList employeeInformation={this.props.employeeInformation} />
                </div>
                <div id="skills-container" className="card" style={{ width: "400px"}}>
                  <SkillList skills={this.props.employeeInformation.skills} />
                </div>
              </div>
            </div>
        )
    }
}
