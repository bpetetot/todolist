import React, { Component } from 'react';

import './todo.css'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }

  handleDone = () => {
    this.setState({ done: !this.state.done })
  }

  render() {
    const classes = this.state.done ? "todo todo-done" : "todo"
    return (
      <div className={classes} onClick={this.handleDone}>
       {this.props.todo}
      </div>
    );
  }
}

export default Todo;