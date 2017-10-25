import React, { Component } from 'react';

class TodoInput extends Component {

  add = () => {
    const value = this.refs.newTodo.value
    this.props.onAdd(value)
  }

  render() {
    return (
      <div>
        <input
          ref="newTodo"
          className="form-control"
          type="text"
          placeholder="Saisir votre todo"
        />
        <button className="btn btn-primary" onClick={this.add}>Ajouter</button>
      </div>
    );
  }
}

export default TodoInput;