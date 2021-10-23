import React from 'react';
import { connect } from 'react-redux';

function TodoHeader({ todos }) {
  const incompleteTodos = todos.filter((todo) => todo.complete === false);
  return (
    <header>
      <h1>Todo List</h1>
      <span>{incompleteTodos.length}</span>
    </header>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoHeader);
