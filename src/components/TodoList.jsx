import React, { Component } from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ol style={{ listStyleType: 'none' }}>
        {this.props.todolist.map((list) => (
          <div key={list.id} className="list">
            <li className="clearfix">
              <input type="checkbox" onChange={(e) => this.props.onChecked(list.id)} defaultChecked={list.completed} />
              <span className={list.completed ? 'strike' : {}}>{list.text}</span>
              {this.props.current === 'completed' ? (
                <button className="btn-delete" onClick={(e) => this.props.deleteTodo(list.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              ) : (
                ''
              )}{' '}
            </li>
            <hr />
          </div>
        ))}{' '}
        {this.props.todolist ? (
          <button className="btndelete" onClick={this.props.deleteAll}>
            Delete
          </button>
        ) : (
          ''
        )}
      </ol>
    );
  }
}

export default TodoList;
