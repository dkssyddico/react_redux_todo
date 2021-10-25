import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;

  h2 {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.completedTitleColor};
  }

  button {
    all: unset;
    cursor: pointer;
    color: #9e9e9e;
    font-size: 14px;
  }
`;

const CompletedTodos = ({ todos }) => {
  const [showing, setShowing] = useState(false);
  const completedTodos = todos.filter((todo) => todo.complete === true);
  const onClick = () => {
    setShowing((prevShowing) => !prevShowing);
  };

  return (
    <div>
      <TitleContainer>
        <h2>{completedTodos.length}개의 완료한 항목</h2>
        <button onClick={onClick}>{showing ? '가리기' : '보기'}</button>
      </TitleContainer>
      {showing ? (
        <ul>
          {todos.map((todo) => todo.complete === true && <TodoItem key={todo.id} {...todo} />)}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(CompletedTodos);
