import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = () => {
  const INITIAL_STATE = [
      {
        id: uuidv4(),
        text: "Walk the dog"
      },
      {
        id: uuidv4(),
        text: "Get groceries"
      },
      {
        id: uuidv4(),
        text: "Do the dishes"
      },
  ];
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const addTodo = (text) => {
    setTodoList((todos) => [...todoList, { id: uuidv4(), text }]);
  };

  function handleRemove(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setBoxList(newTodoList);
  }

  return (
    <div className="container">
      <NewTodoForm addTodo={addTodo} />
      <ul className="todo-list">
        {todoList.map(({ id, text }) => (
          <Box key={id} id={id} text={text} handleRemove={handleRemove} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
