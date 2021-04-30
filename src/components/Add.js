import { Todo } from './TodoContext';
import { useContext, useState } from 'react';

export const Add = () => {
  const { addTodo } = useContext(Todo);
  const [ input, setInput ] = useState('');
  const pushItem = () => { addTodo(input); setInput(''); }

  return (
    <div className="flex flex-row justify-center">
      <div className="bg-gray-100 w-2/3 flex flex-row p-2 rounded-lg border-2">
        <input 
          type="text"
          value={input}
          className="bg-gray-100 flex flex-auto text-gray-700 focus:outline-none"
          onKeyDown={(e) => e.key === 'Enter' ? pushItem() : null}
          onChange={(e) => setInput(e.target.value)}
        />
        <input 
          type="submit" 
          value="Ajouter" 
          className="bg-gray-100 px-3 text-gray-700 font-medium cursor-pointer"
          onClick={pushItem}
        />
      </div>
    </div>
  );
};