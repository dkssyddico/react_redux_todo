import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
import TodoContainer from './TodoContainer';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoContainer toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
