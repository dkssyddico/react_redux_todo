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
  padding: 30px 45px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  @media only screen and (min-width: 390px) and (max-width: 767px) {
    width: 390px;
    height: 100vh;
  }
`;

const TodoListContainer = styled.section`
  margin-top: 20px;
  height: 270px;
  overflow-y: scroll;
  h1 {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

function TodoContainer({ todos, theme, toggleTheme }) {
  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <Main>
      <TodoHeader theme={theme} toggleTheme={toggleTheme} />
      <AddTodoForm />
      <TodoListContainer>
        {completeTodos.length > 0 && <CompletedTodos />}
        {todos.length > 0 ? <TodoList /> : <h1>할 일을 추가해주세요.</h1>}
      </TodoListContainer>
    </Main>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoContainer);
