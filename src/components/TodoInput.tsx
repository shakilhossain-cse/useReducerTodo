import * as React from "react";
import { useState } from "react";
import { TodoAction } from "../containers/Todos";


interface TodoInputProps {
  dispatch: React.Dispatch<TodoAction>;
}

const TodoInput: React.FC<TodoInputProps> = ({ dispatch }) => {
  const [todoName, setTodoName] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setTodoName(evt.currentTarget.value);
  };
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name: todoName } });
    setTodoName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your todo...."
        value={todoName}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;