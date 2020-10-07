import React, { Component } from 'react'
import Employee from './Employee';

export default class Employees extends Component {
    render() {
        let employees = this.props.employees;
        // console.log(employees)
        return (
            <div>
                <div className="card-header">
                    Employee <span> <i class="fa fa-user"></i> </span>    
                </div>

                <ul id="employees" className="list-group list-group-flush">
                    {employees.map((emp, index) => (
                        <Employee emp={emp} key={index} handleSelectEmployee={this.props.handleSelectEmployee} />
                    ))}
                </ul>
            </div>
        )
    }
}
