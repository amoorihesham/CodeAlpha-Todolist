import React, { createContext, useState } from 'react';
import { TodoProps, TodosContextType } from '../utils/types';

export const TodosContext = createContext<TodosContextType | null>(null);

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const getUserTodos = () => {
    if (localStorage.getItem('todos') !== null) {
      const savedTodos = JSON.parse(localStorage.getItem('todos') as string);
      setTodos(savedTodos);
    } else {
      setTodos([]);
    }
    setIsLoading(false);
  };
  const addTodo = (newTodo: TodoProps) => {
    setIsLoading(true);
    if (localStorage.getItem('todos') !== null) {
      const savedTodos = JSON.parse(localStorage.getItem('todos') as string);
      savedTodos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(savedTodos));
      setTodos(savedTodos);
    } else {
      localStorage.setItem('todos', JSON.stringify([newTodo]));
      setTodos([newTodo]);
    }
    setIsLoading(false);
  };
  const editTodo = (id: string | undefined, data: { title: string; days: number; isCompleted: boolean }) => {
    const deleteHere = todos.filter((todo: TodoProps) => todo.id !== id);
    deleteHere.push({
      id,
      ...data,
    });
    localStorage.setItem('todos', JSON.stringify(deleteHere));
    setTodos(deleteHere);
  };
  const deleteTodo = (id: string | undefined) => {
    const restTodos = todos.filter((todo: TodoProps) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(restTodos));
    setTodos(restTodos);
  };
  const toggleCompleted = (id: string | undefined) => {
    const [todo] = todos.filter((todo: TodoProps) => todo.id === id);
    const restTodos = todos.filter((todo: TodoProps) => todo.id !== id);
    todo.isCompleted = todo.isCompleted ? false : true;
    restTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(restTodos));
    setTodos(restTodos);
  };
  return <TodosContext.Provider value={{ isLoading, todos, getUserTodos, addTodo, editTodo, deleteTodo, toggleCompleted }}>{children}</TodosContext.Provider>;
};
