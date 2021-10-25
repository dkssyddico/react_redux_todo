import { useState, useEffect } from 'react';

const LIGHT = 'light';
const DARK = 'dark';
const LS_THEME = 'theme';

// 브라우저를 새로고침하거나 해도 그대로 theme mode 유지하게 하기
function useTheme() {
  const [theme, setTheme] = useState(LIGHT);
  // 컴포넌트가 마운트되었는지 확인하는 상태
  const [componentMounted, setComponentMounted] = useState(true);

  const setMode = (mode) => {
    window.localStorage.setItem(LS_THEME, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === LIGHT) {
      setMode(DARK);
    } else {
      setMode(LIGHT);
    }
  };

  useEffect(() => {
    const currentTheme = window.localStorage.getItem(LS_THEME);
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setMode(LIGHT);
    }
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted];
}

export default useTheme;
