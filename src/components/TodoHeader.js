import React from 'react';
import { connect } from 'react-redux';

function TodoHeader({ todos }) {
  const incompleteTodos = todos.filter((todo) => todo.complete === false);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const day = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <header>
      <h1>Todo List</h1>
      <p>{dateString}</p>
      <p>{day}</p>
      <span>{incompleteTodos.length}</span>
    </header>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoHeader);
