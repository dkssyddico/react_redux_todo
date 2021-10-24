import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import TodoContainer from './TodoContainer';

function App() {
  const theme = {
    colors: {
      bgColor: '#123232',
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
