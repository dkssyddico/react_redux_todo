import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';
import { HiTrash } from 'react-icons/hi';

import { todoActionCreators } from '../modules/todoReducer';

const CircleBtn = styled.div`
  flex-basis: 1;
  all: unset;
  margin: 0;
  margin-right: 8px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.colors.titleColor};
  color: ${({ theme }) => theme.colors.titleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
`;

const TodoText = styled.div`
  width: 100%;
  flex: 1;
  font-size: 21px;
  color: ${({ theme }) => theme.colors.textColor};
  word-break: break-all;
`;

const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 100%;
  flex: 1;
  font-size: 21px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const Todo = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    ${RemoveBtn} {
      opacity: 1;
    }
  }
`;

const TodoItem = ({ text, editable, complete, editTodo, toggleTodo, deleteTodo }) => {
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
    <Todo>
      <CircleBtn onClick={onToggleClick}>{complete ? <MdDone /> : ''}</CircleBtn>
      {edit ? (
        <>
          <Input onChange={onChange} onKeyPress={onEnterPress} value={todo} />
        </>
      ) : (
        <>
          <TodoText onClick={onTextClick}>{todo}</TodoText>
        </>
      )}
      <RemoveBtn onClick={onDeleteClick}>
        <HiTrash />
      </RemoveBtn>
    </Todo>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    deleteTodo: () => dispatch(todoActionCreators.remove(id)),
    editTodo: (text) => dispatch(todoActionCreators.edit(id, text)),
    toggleTodo: () => dispatch(todoActionCreators.toggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
