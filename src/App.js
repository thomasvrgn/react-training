import { useState, useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './context/Theme';
import { Displayer } from './Displayer';

const themes = {
  dark: {
    button: 'text-white bg-gray-800'
  },
  light: {
    button: 'text-gray-800 bg-gray-100'
  }
}

export function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
   <div className="container m-8 flex flex-col w-56 space-y-4">
     <ThemeProvider value={[theme, setTheme]}>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Changer le thème
      </Button>
      <Button onClick={() => {
        localStorage.removeItem('theme')
        setTheme('light');
      }}>
        Supprimer les données
      </Button>
      <Displayer />
    </ThemeProvider>
   </div>
  )
}

const Button = ({ onClick, children }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <button 
      onClick={onClick} 
      className={'py-2 px-4 rounded-lg font-medium shadow ' + themes[theme].button}
    >
      {children}
    </button>
  );
}