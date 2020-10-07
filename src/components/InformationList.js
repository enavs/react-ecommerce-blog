import React, { Component } from 'react'
import Information from './Information';

export default class InformationList extends Component {
    render() {
        let employeeInformation = this.props.employeeInformation;
        // console.log(employeeInformation);
        var informationList = []
        for (let attr in employeeInformation) {
            if (employeeInformation.hasOwnProperty(attr)) {
                if (attr !== 'skills') {
                    let attribute = attr;
                    let value = employeeInformation[attr];
                    informationList.push([attribute, value])
                }
                // console.log(attr)
                // console.log(employeeInformation[attr])
            }
        }
        // console.log(informationList);

        return (
            <div>
                <div className="card-header">
                    Information <span> <i className="fa fa-question-circle"></i> </span>
                </div>
                <ul id="information" className="list-group list-group-flush">
                    {informationList.map((lineItem, index) => (
                        <Information attrName={lineItem[0]} attrValue={lineItem[1]} key={index} />
                    ))}
                </ul>
            </div>
        )
    }
}
