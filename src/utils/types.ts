export interface BTNProps {
  title: string;
  outline?: boolean;
  color: string;
  to?: string;
}

export type TodoProps = {
  id: string | undefined;
  title: string;
  days: number;
  isCompleted: boolean;
};

export type TodosContextType = {
  getUserTodos: () => void;
  addTodo: (todo: TodoProps) => void;
  editTodo: (id: string | undefined, {}: { title: string; days: number; isCompleted: boolean }) => void;
  deleteTodo: (id: string | undefined) => void;
  toggleCompleted: (id: string | undefined) => void;
  isLoading: boolean;
  todos: TodoProps[] | null;
};
