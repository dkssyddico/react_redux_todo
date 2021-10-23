import React from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoHeader from './TodoHeader';
import Todo from './Todo';
import CompletedTodos from './CompletedTodos';

function Main({ todos }) {
  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <div>
      <TodoHeader todos={todos} />
      <AddTodoForm />
      {completeTodos.length > 0 && <CompletedTodos todos={todos} />}
      <ul>{todos.map((todo) => todo.complete === false && <Todo key={todo.id} {...todo} />)}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(Main);
