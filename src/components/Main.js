import React, { useState } from 'react';

function Main() {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
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
        <button onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Main;
