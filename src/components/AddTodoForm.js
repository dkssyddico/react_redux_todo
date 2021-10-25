import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { todoActionCreators } from '../modules/todoReducer';

const FormContainer = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightTextColor};
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightTextColor};
  }
`;

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
    <FormContainer>
      <form onSubmit={onSubmit}>
        <Input type='text' value={text} onChange={onChange} placeholder='할 일을 입력해주세요.' />
        {/* <button>Submit</button> */}
      </form>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(todoActionCreators.add(text)) };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
