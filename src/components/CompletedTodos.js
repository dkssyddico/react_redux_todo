import React, { useState } from 'react';
import Todo from './Todo';

function CompletedTodos({ todos }) {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prevShowing) => !prevShowing);
  };

  const completedTodos = todos.filter((todo) => todo.complete === true);

  return (
    <div>
      <h2>{completedTodos.length}개의 완료한 항목</h2>
      <button onClick={onClick}>{showing ? '가리기' : '보기'}</button>
      {showing ? (
        <ul>{todos.map((todo) => todo.complete === true && <Todo key={todo.id} {...todo} />)}</ul>
      ) : (
        ''
      )}
      <hr />
    </div>
  );
}

export default CompletedTodos;
