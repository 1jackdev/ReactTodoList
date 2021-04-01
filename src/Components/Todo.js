import { React } from "react";

const Todo = ({ id, text, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div className="mt-2 w-100 d-flex list-group-item row justify-content-around">
      <div className="bg-light col-sm-7 col-lg-8" key={id}>
        {text}
      </div>
      <button type="button" onClick={remove} className="btn btn-danger col-sm-3 col-lg-2">
        Remove
      </button>
    </div>
  );
};

export default Todo;
