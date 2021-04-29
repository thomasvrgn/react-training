import { useContext } from 'react';
import { ThemeContext } from './context/Theme';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export function Displayer() {
  const [theme] = useContext(ThemeContext);
  return (
    <h1 className="text-xl text-gray-600">
      Thème actuel : 
      <span className="font-medium ml-1 text-gray-800">
        {capitalize(theme)}
      </span>
    </h1>
  )
}