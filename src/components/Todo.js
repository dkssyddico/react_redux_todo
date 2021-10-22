import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoActionCreators } from '../modules/todoReducer';

function Todo({ deleteTodo, text, editable, editTodo }) {
  const [edit, setEdit] = useState(editable);
  const [todo, setTodo] = useState(text);

  const onTextClick = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const onDeleteClick = () => {
    deleteTodo();
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onEnterPress = (e) => {
    const { key } = e;
    if (key === 'Enter') {
      editTodo(todo);
      setEdit((prevEdit) => !prevEdit);
    }
  };

  return (
    <li>
      {edit ? (
        <>
          <input onChange={onChange} onKeyPress={onEnterPress} value={todo} />
        </>
      ) : (
        <>
          <span onClick={onTextClick}>{todo}</span>
          <button onClick={onDeleteClick}>Delete</button>
        </>
      )}
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    deleteTodo: () => dispatch(todoActionCreators.remove(id)),
    editTodo: (text) => dispatch(todoActionCreators.edit(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
