import { FC } from "react";
import { TodoInterface } from "../hooks/useTodos";

interface TodoType {
  todo: TodoInterface;
  removeTodo: (id: number) => void;
}

export const Todo: FC<TodoType> = ({ todo, removeTodo }) => {
  console.log(todo.id);
  return (
    <div className="todo">
      <p>{todo.name}</p>
      <button className="button" onClick={() => removeTodo(todo.id)}>
        done
      </button>
    </div>
  );
};
