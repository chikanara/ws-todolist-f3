import React, { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export class App extends Component {
  state = {
    taskList: [
      {
        id: 1,
        task: "Learn HTML and CSS",
        isDone: true,
      },
      {
        id: 2,
        task: "Learn JS",
        isDone: true,
      },
      {
        id: 3,
        task: "Learn react js",
        isDone: true,
      },
      {
        id: 4,
        task: "Learn React redux",
        isDone: false,
      },
    ],
  };
  handleComplete = (taskId) => {
    this.setState({
      taskList: this.state.taskList.map((todo) =>
        todo.id === taskId ? { ...todo, isDone: !todo.isDone } : todo
      ),
    });
  };
  handleDelete = (taskId) => {
    this.setState({
      taskList: this.state.taskList.filter((todo) => todo.id !== taskId),
    });
  };

  handleAdd = (newTask) => {
    if(!newTask){
      alert("Enter a new task")
    }
    else {
      this.setState({
        taskList: [
          ...this.state.taskList,
          { id: Math.random(), isDone: false, task: newTask },
        ],
      });
    };
    }
 

  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <AddTask handleAdd={this.handleAdd} />
        <TaskList
          taskList={this.state.taskList}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
