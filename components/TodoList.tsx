import { FC, useContext } from "react";
import { TodoContextType } from "../hooks/useTodos";
import { Todo } from "./Todo";
import { TodoContext } from "../hooks/useTodos";

export const TodoList: FC = () => {
  const { todos, removeTodo }: TodoContextType = useContext(TodoContext);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};
