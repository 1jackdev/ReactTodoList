import { React, useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    text: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = formData;
    addTodo(text);
    setFormData(INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex">
        <label htmlFor="text"></label>
        <input
          className="form-control"
          id="text"
          type="text"
          name="text"
          placeholder="Walk the dog"
          alt="todo-input"
          value={formData.text}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary col-sm-4 col-md-2">Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodoForm;
