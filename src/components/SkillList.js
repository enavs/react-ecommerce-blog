import React, { Component } from 'react'
import Skill from './Skill'

export default class SkillList extends Component {
    render() {
        const skills = this.props.skills;

        return (
            <div>
                <div className="card-header">
                    Skills <span> <i class="fa fa-list"></i> </span>    
                </div>
                <ul id="skills" className="list-group list-group-flush">
                    {skills ? skills.map((skill, index) => (
                        <Skill label={Object.keys(skill)} labelText={Object.values(skill)} />
                    )) : (<p>You must select an employee first.</p>)}
                </ul>
            </div>
        )
    }
}
