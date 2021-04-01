import { React, useState } from "react";

const NewTodoForm = ({ addBox }) => {
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
    addBox(text);
    setFormData(INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo</label>
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Walk the dog"
        value={formData.text}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
