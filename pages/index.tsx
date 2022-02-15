import type { NextPage } from "next";
import { AddInput } from "../components/AddInput";
import { TodoList } from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <div className="todoContainer">
      <AddInput />
      <TodoList />
    </div>
  );
};

export default Home;
