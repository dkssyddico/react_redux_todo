import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { todoActionCreators } from '../modules/todoReducer';

const AddTodoForm = ({ addToDo }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('내용을 입력해주세요!');
    } else {
      addToDo(text);
      setText('');
    }
  };

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setText(value);
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(todoActionCreators.add(text)) };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
