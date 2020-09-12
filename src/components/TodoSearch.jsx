import React, { Component } from 'react';

class TodoSearch extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search" placeholder="Search" onChange={this.props.searchTodo} />
      </div>
    );
  }
}

export default TodoSearch;
