import React from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoHeader from './TodoHeader';
import CompletedTodos from './CompletedTodos';
import TodoList from './TodoList';

function TodoContainer({ todos }) {
  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <div>
      <TodoHeader />
      <AddTodoForm />
      {completeTodos.length > 0 && <CompletedTodos />}
      <TodoList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoContainer);
