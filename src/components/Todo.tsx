import * as React from "react";
import { TodoAction, TodosProps } from "../containers/Todos";

export interface Props extends TodosProps {
  dispatch: React.Dispatch<TodoAction>;
}

const Todo: React.FC<Props> = ({ dispatch, id, isComplete, todoName }) => {
  const handleDelete = (id: string) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: id },
    });
  };
  const handleToggle = (id: string) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: id },
    });
  };
  return (
    <div>
      <div>
        <p style={{ textDecoration: `${isComplete ? "line-through" : ""}` }}>
          {todoName}
        </p>
      </div>
      <div>
        <button onClick={() => handleToggle(id)}>Toggle</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;