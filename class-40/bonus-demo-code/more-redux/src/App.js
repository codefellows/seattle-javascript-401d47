import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './store/category.slice';
import { getTodos } from './store/todos';
import useTodos from './hooks/useTodos';

import './App.css';

function App() {
  const { todoList, addToList } = useTodos();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTodos());
  }, [])
  return (
    <>
      <h1>More Redux Tool Kit</h1>

      <h3>Categories</h3>
      {categories.list.map((category, idx) => <p key={`category-${idx}`}>{category.name}</p>)}

      <h3>ToDos</h3>
      {todoList.map((task, idx) => <p key={`task-${idx}`}>{task.text}</p>)}
      <button onClick={() => addToList({text: 'Laundry'})}>Test Add</button>
    </>
  );
}

export default App;
