import { useContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext';
import { TodoProps, TodosContextType } from '../utils/types';
import BTN from '../components/BTN/BTN';

const CreatePage = () => {
  const { isLoading, addTodo } = useContext(TodosContext) as TodosContextType;
  const [title, setTitle] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: TodoProps = {
      id: crypto.randomUUID(),
      title: title,
      days: days,
      isCompleted: false,
    };

    addTodo(newTodo);
  };
  return (
    <div className='create-page'>
      <div className='add-button'>
        <BTN
          title='Home'
          color='#4caf50'
          to='/'
        />
        <BTN
          title='Create'
          outline={true}
          color='#4caf50'
          to='/create'
        />
      </div>
      <form onSubmit={handleSubmit}>
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
            placeholder='Number of days'
            type='number'
            required
            value={days}
            onChange={(e) => setDays(+e.target.value)}
          />
        </div>
        <div className='group'>
          <button
            type='submit'
            className='save-btn'
            disabled={isLoading}
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
