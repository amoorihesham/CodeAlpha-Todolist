import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TodosContextProvider } from './context/TodosContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
