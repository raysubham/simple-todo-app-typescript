import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { TodoContextType } from "../hooks/useTodos";
import { TodoContext } from "../hooks/useTodos";

export const AddInput: FC = () => {
  const [inputText, setInputText] = useState("");
  const { addTodo }: TodoContextType = useContext(TodoContext);

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputText(e.target.value);
  };
  const handleTodoSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo({ id: Date.now(), name: inputText, completed: false });
    setInputText("");
  };

  return (
    <div className="addInput">
      <form onSubmit={handleTodoSubmit}>
        <input
          required
          type="text"
          value={inputText}
          onChange={handleInputOnChange}
        />
        <button className="button" type="submit">
          Add me
        </button>
      </form>
    </div>
  );
};
