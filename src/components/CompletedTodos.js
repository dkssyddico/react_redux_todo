import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const CompletedTodos = ({ todos }) => {
  const [showing, setShowing] = useState(false);
  const completedTodos = todos.filter((todo) => todo.complete === true);
  const onClick = () => {
    setShowing((prevShowing) => !prevShowing);
  };

  return (
    <div>
      <h2>{completedTodos.length}개의 완료한 항목</h2>
      <button onClick={onClick}>{showing ? '가리기' : '보기'}</button>
      {showing ? (
        <ul>
          {todos.map((todo) => todo.complete === true && <TodoItem key={todo.id} {...todo} />)}
        </ul>
      ) : (
        ''
      )}
      <hr />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(CompletedTodos);
