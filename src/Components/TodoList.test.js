import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, text = "walk the dog") {
  const textInput = todoList.getByAltText("todo-input");
  fireEvent.change(textInput, { target: { value: text } });

  const button = todoList.getByText("Add Todo");
  fireEvent.submit(button);
}

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new todo", () => {
  const todoList = render(<TodoList />);

  expect(todoList.queryByText("Remove")).not.toBeInTheDocument();

  addTodo(todoList);

  const removeButton = todoList.getByText("Remove");
  expect(removeButton).toBeInTheDocument();

  expect(removeButton.previousSibling).toHaveTextContent("walk the dog");
});

it("can remove a todo", () => {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  const removeButton = todoList.getByText("Remove");
  fireEvent.click(removeButton);

  expect(removeButton).not.toBeInTheDocument();
});
