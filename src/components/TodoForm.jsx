import React, { Component } from 'react';
class TodoForm extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.list.value.trim();

    if (todo == '') {
      return 0;
    }
    this.props.addTodo(todo);
    e.target.list.value = '';
  };

  render() {
    return (
      <div className="todoform">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="list" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
