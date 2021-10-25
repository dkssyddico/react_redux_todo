import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/theme';
import TodoContainer from './TodoContainer';

function App() {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div>Wait loading</div>;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <TodoContainer theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
