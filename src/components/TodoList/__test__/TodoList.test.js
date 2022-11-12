import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../TodoList";


describe("Should render a todo list", () => {
  it("Should show all the todo's", () => {
    render(<TodoList />);

    const generateTodo = screen.getByLabelText("top-btn");

    const noTodoText = screen.getByTestId("no-todo-text");

    expect(noTodoText).toBeInTheDocument();

    fireEvent.click(generateTodo);

    const todoContainer = screen.getByTestId("items-container");
    expect(todoContainer).toBeInTheDocument();

  })
})