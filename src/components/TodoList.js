import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.ul`
  height: 300px;
  overflow-y: scroll;
`;

function TodoList({ todos }) {
  const incompleteTodos = todos.filter((todo) => todo.complete === false);
  return (
    <List>
      <ul>
        {incompleteTodos.map(
          (todo) => todo.complete === false && <TodoItem key={todo.id} {...todo} />
        )}
      </ul>
    </List>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoList);
