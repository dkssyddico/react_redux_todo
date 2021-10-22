import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoActionCreators } from '../modules/todoReducer';
import Todo from './Todo';

function Main({ todos, addToDo }) {
  // console.log(todos);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('내용을 입력해주세요!');
    }
    addToDo(text);
    setText('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <h1>Write a to do here!</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { addToDo: (text) => dispatch(todoActionCreators.add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
