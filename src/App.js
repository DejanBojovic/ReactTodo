import React, { Component } from 'react';
import './App.css';

import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      info: [
        {
            id: 1,
            text: "Take out the trash",
            completed: true
        },
        {
            id: 2,
            text: "Clean your room",
            completed: false
        },
        {
            id: 3,
            text: "Mow the lawn",
            completed: true
        },
        {
            id: 4,
            text: "Shut the fuck up",
            completed: false
        },
      ],

    }
  }

  toggleTodoHandler = (id) => {
    const itemIndex = this.state.info.findIndex((value) => {
      return id === value.id;
    })

    const toggledItem = this.state.info[itemIndex].completed;

    const newInfo = [...this.state.info];
    newInfo[itemIndex].completed = !toggledItem;

    this.setState({newInfo});
  }

  addTodoHandler = (event) => {
    const newInfo = [...this.state.info];
    const textValue = event.target.previousSibling.value;

    if(textValue !== "") {
      let idValue = newInfo[newInfo.length-1].id;
      ++idValue;
  
      newInfo.push({
        id: idValue,
        text: textValue,
        completed: false
      })
  
      this.setState({
        info: newInfo
      })
  
      event.target.previousSibling.value = "";
    }
  }

  render() {
    return (
      <div>
        <TodoInput 
          addMethod={this.addTodoHandler}
        />
        <TodoList
          todos={this.state.info} 
          toggleMethod={this.toggleTodoHandler}
        />
      </div>
    );
  }
}

export default App;
