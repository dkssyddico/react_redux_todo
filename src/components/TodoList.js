import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul>{todos.map((todo) => todo.complete === false && <TodoItem key={todo.id} {...todo} />)}</ul>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoList);
