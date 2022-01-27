import React, { Component } from 'react'


export class Form extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             comment: '',
             skill: 'Angular'
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }

    handleUserNameChange(event){
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSkillChange = event => {
        this.setState({
            skill: event.target.value
        })
    }

    handleSubmit = (event) => {
        const { userName, comment, skill } = this.state;

        console.log(event);
        alert(`UserName: ${userName} -- Comment: ${comment} -- Skill: ${skill} `)
        event.preventDefault();
    }
    
    render() {

        return (
            <div>
                <div className="componentName"><h1>Form Component</h1></div>

                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label>UserName: </label>
                        <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
                    </div>
                    <div>
                        <label>Comment: </label>
                        <input type="text" value={this.state.comment} onChange={this.handleCommentChange}/>
                    </div>
                    <div>
                        <label>Skills: </label>
                        <select value={this.state.skill} onChange={this.handleSkillChange}>
                            <option value="Vanilla JS">Vanilla JS</option>
                            <option value="Angularasdasas">Angular</option>
                            <option value="React">React</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form
