import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { TodosContext } from './context/TodosContext';
import { TodosContextType } from './utils/types';
import router from './utils/appRouter';
import './App.css';

function App() {
  const { getUserTodos } = useContext(TodosContext) as TodosContextType;

  useEffect(() => {
    getUserTodos();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
