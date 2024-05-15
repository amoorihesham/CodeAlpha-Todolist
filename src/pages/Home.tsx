import { useContext } from 'react';
import BTN from '../components/BTN/BTN';
import Todo from '../components/Todo-Card/Todo';
import { TodosContextType } from '../utils/types';
import { TodosContext } from '../context/TodosContext';
import LoadingSkeleton from '../components/Loading/LoadingSkeleton';

const Home = () => {
  const { isLoading, todos } = useContext(TodosContext) as TodosContextType;

  if (isLoading) {
    return <LoadingSkeleton />;
  } else {
    return (
      <div className='home-page'>
        <div className='add-button'>
          <BTN
            title='Home'
            color='#4caf50'
            to='/ceate'
          />
          <BTN
            title='Create'
            outline={true}
            color='#4caf50'
            to='/create'
          />
        </div>
        <div className='todos-container'>
          {todos?.length ? (
            todos?.map((todo) => (
              <Todo
                {...todo}
                key={todo.id}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center' }}>No Todos Yet...!</h2>
              <p>Harry up... The Success Start Now..!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Home;
