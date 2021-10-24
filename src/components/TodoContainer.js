import React from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoHeader from './TodoHeader';
import CompletedTodos from './CompletedTodos';
import TodoList from './TodoList';
import styled from 'styled-components';

const Main = styled.main`
  width: 512px;
  height: 500px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

function TodoContainer({ todos, toggleTheme }) {
  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <Main>
      <TodoHeader toggleTheme={toggleTheme} />
      <AddTodoForm />
      {completeTodos.length > 0 && <CompletedTodos />}
      <TodoList />
    </Main>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoContainer);
