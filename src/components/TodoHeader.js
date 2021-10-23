import React from 'react';

function TodoHeader({ todos }) {
  const incompleteTodos = todos.filter((todo) => todo.complete === false);
  return (
    <header>
      <h1>Todo List</h1>
      <span>{incompleteTodos.length}</span>
    </header>
  );
}

export default TodoHeader;
