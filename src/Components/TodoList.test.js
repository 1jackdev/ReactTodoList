import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import TodoList from "./TodoList";

// function addBox(
//   boxList,
//   height = "100",
//   width = "100",
//   backgroundColor = "peachpuff"
// ) {
//   const heightInput = boxList.getByLabelText("Height");
//   const widthInput = boxList.getByLabelText("Width");
//   const backgroundInput = boxList.getByLabelText("Background Color");
//   fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
//   fireEvent.change(widthInput, { target: { value: width } });
//   fireEvent.change(heightInput, { target: { value: height } });
//   const button = boxList.getByText("Add Box");
//   fireEvent.click(button);
// }

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// it("adds a new box", () => {
//   const boxList = render(<BoxList />);

//   expect(boxList.queryByText("X")).not.toBeInTheDocument();

//   addBox(boxList);

//   const removeButton = boxList.getByText("X");
//   expect(removeButton).toBeInTheDocument();
//   expect(removeButton.nextSibling).toHaveStyle(`
//     width: 100px;
//     height: 100px;
//     background-color: peachpuff;
//   `);
// });

// it("can remove a box", ()=>{
//   const boxList = render(<BoxList />);
//   addBox(boxList);

//   const removeButton = boxList.getByText("X");
//   fireEvent.click(removeButton)

//   expect(removeButton).not.toBeInTheDocument()
// })