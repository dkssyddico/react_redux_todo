import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoActionCreators } from '../modules/todoReducer';

function Todo({ text, editable, complete, editTodo, toggleTodo, deleteTodo }) {
  const [edit, setEdit] = useState(editable);
  const [todo, setTodo] = useState(text);

  const onTextClick = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const onDeleteClick = () => {
    deleteTodo();
  };

  const onToggleClick = () => {
    toggleTodo();
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
      <button onClick={onToggleClick}>{complete ? 'incomplete' : 'complete'}</button>
      {edit ? (
        <>
          <input onChange={onChange} onKeyPress={onEnterPress} value={todo} />
        </>
      ) : (
        <>
          <span onClick={onTextClick}>{todo}</span>
        </>
      )}
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const { id } = ownProps;
  return {
    deleteTodo: () => dispatch(todoActionCreators.remove(id)),
    editTodo: (text) => dispatch(todoActionCreators.edit(id, text)),
    toggleTodo: () => dispatch(todoActionCreators.toggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
