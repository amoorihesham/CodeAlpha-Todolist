import { useContext } from 'react';
import { TodoProps, TodosContextType } from '../../utils/types';
import { TodosContext } from '../../context/TodosContext';
import BTN from '../BTN/BTN';
import './style.css';

const Todo = ({ title, id, days, isCompleted }: TodoProps) => {
  const { deleteTodo, toggleCompleted } = useContext(TodosContext) as TodosContextType;

  return (
    <div
      className='todo'
      style={{ opacity: isCompleted ? '.6' : '1' }}
    >
      <div className='top'>
        <h3 style={{ margin: '0', padding: '0', fontWeight: 'bold', fontSize: '1.3rem', textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</h3>
      </div>
      <div className='date'>
        <p className='ex'>{days}</p>
      </div>

      <div className='actions'>
        <BTN
          title='Edit'
          outline={true}
          color='yellow'
          to={`/edit/${id}`}
        />
        <button
          style={{ border: `1px solid blue`, backgroundColor: 'transparent', cursor: 'pointer', padding: '6px 12px', borderRadius: '.2rem' }}
          onClick={() => toggleCompleted(id)}
        >
          Completed
        </button>
        <button
          style={{ border: `1px solid red`, backgroundColor: 'transparent', cursor: 'pointer', padding: '6px 12px', borderRadius: '.2rem' }}
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
