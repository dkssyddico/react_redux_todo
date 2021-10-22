import React from 'react';
import { connect } from 'react-redux';
import { todoActionCreators } from '../modules/todoReducer';

function Todo({ deleteTodo }) {
  const onDeleteClick = () => {
    deleteTodo();
  };

  return (
    <li>
      <span>text</span>
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return { deleteTodo: () => dispatch(todoActionCreators.remove(id)) };
};

export default connect(null, mapDispatchToProps)(Todo);
