import { useState } from 'react';
import { TodoProvider } from '../components/TodoContext';
import { List } from '../components/List';
import { Add } from '../components/Add';

export const App = () => {
  const [todo, setTodo] = useState([{value: 'test'}, {value: 'bruh'}]);
  const actions = {
    setTodo,
    addTodo: (item) => setTodo([...todo, { value: item, }]),
    removeTodo: (index) => setTodo(todo.filter((x, idx) => idx !== index)),
    changeTodo: (item, index) => {
      todo[index].value = item;
      return setTodo([...todo]);
    }
  };

  return (
    <TodoProvider value={{todo, ...actions}}>
      <List />
      <Add />
    </TodoProvider>
  );
};