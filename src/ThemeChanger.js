import React, { useState, useEffect } from 'react'
import { ToogleSwitch } from './components';

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
  })
  return (
    <>
      <ToogleSwitch value={themeState} onChange={handleChange} name={themeState ? 'Modo Light' : 'Modo Dark'}/>
    </>
  )
}

export default ThemeChanger;