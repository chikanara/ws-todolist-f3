import React, { Component } from 'react'

export class AddTask extends Component {
    state={
        text:""
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value });
        console.log(this.state.text);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick={() => {this.props.handleAdd(this.state.text)
                this.setState({ text:""  });}} >Add Task</button>
            </div>
        )
    }
}

export default AddTask
