import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodoProps, TodosContextType } from '../utils/types';
import { TodosContext } from '../context/TodosContext';

const EditPage = () => {
  const { isLoading, editTodo } = useContext(TodosContext) as TodosContextType;
  const [title, setTitle] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const { id } = useParams();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') as string);
    const thisTodo = savedTodos.filter((todo: TodoProps) => todo.id === id);
    const actualTodo: TodoProps = {
      ...thisTodo[0],
    };
    setTitle(actualTodo.title);
    setDays(actualTodo.days);
  }, []);
  return (
    <div className='create-page'>
      <form>
        <div className='group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='group'>
          <label htmlFor='end'>Deadline</label>
          <input
            type='number'
            required
            placeholder='Number of days'
            value={days}
            onChange={(e) => setDays(+e.target.value)}
          />
        </div>
        <div className='group'>
          <button
            type='button'
            className='save-btn'
            onClick={() => editTodo(id, { title, days, isCompleted: false })}
            disabled={isLoading}
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
