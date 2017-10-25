import React from 'react'

import Todo from './todo/todo'
import TodoInput from './todoInput/todoInput'
import './app.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: this.props.todos
    }
  }

  handleAdd = (value) => {
    this.setState({ todos: [ ...this.state.todos, value ] })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <TodoInput onAdd={this.handleAdd} />
        {
          this.state.todos.map(todo => <Todo todo={todo} />)
        }
      </div>
    )
  }
}

export default App