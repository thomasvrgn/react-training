import { useContext } from 'react';
import { Todo } from './TodoContext';

export const List = () => {
  let { todo, removeTodo, changeTodo } = useContext(Todo);

  return (
    <div className="flex justify-center my-8">
      {
        todo.length > 0 ? 
        (
          <ul className="w-2/3 space-y-4">
            {todo.map((item, index) => {
              return (
                <li key={index} className="flex flex-row">
                  <span className="flex flex-auto bg-gray-100 py-1.5 rounded-l-lg items-center px-4 font-medium text-gray-700">
                    <input 
                      type="text" 
                      defaultValue={item.value}
                      onChangeCapture={(e) => changeTodo(e.target.value, index)}
                      className="bg-gray-100 focus:outline-none" />
                  </span>
                  <button
                    className="bg-red-400 py-1.5 px-4 rounded-r-lg text-sm text-white font-medium tracking-wide"
                    onClick={() => removeTodo(index)}>
                    Supprimer
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1 className="text-lg font-medium text-gray-700">
            Aucune tâche n'a encore été ajoutée
          </h1>
        )
      }
    </div>
  );
}