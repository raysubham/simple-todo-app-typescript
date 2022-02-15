import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
export interface TodoInterface {
  id: number;
  name: string;
  completed: boolean;
}
export type TodoContextType = {
  todos: TodoInterface[];
  addTodo: (todo: TodoInterface) => void;
  removeTodo: (id: number) => void;
};

const defaultContextValue: TodoContextType = {
  todos: [
    { id: 1, name: "first todo", completed: true },
    { id: 2, name: "second todo", completed: true },
    { id: 3, name: "third todo", completed: true },
    { id: 4, name: "fourth todo", completed: true },
    { id: 5, name: "fifth todo", completed: true },
  ],
  addTodo: () => "add todo",
  removeTodo: () => "remove todo",
};

export const TodoContext = createContext<TodoContextType>(defaultContextValue);

export const TodoContextProvider = ({ children }: Props): JSX.Element => {
  let context: TodoContextType = useTodos();

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (todo: TodoInterface): void => {
    setTodos((todos) => [...todos, todo]);
  };

  const removeTodo = (id: number): void => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return { todos, addTodo, removeTodo };
};
