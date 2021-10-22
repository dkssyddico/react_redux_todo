import React from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import Todo from './Todo';

function Main({ todos }) {
  return (
    <div>
      <h1>Write a to do here!</h1>
      <AddTodoForm />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(Main);
