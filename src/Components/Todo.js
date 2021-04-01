import { React } from "react";
import "./Todo.css";

const Todo = ({ id, text, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <>
      <li key={id} className="todo-container">
        {text}
      </li>
      <button type="button" onClick={remove} className="btn">
        X
      </button>
    </>
  );
};

export default Todo;
