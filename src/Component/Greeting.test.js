import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {

  test("renders hello world", () => {
    render(<Greeting />);
    const greet = screen.getByText("hello world!", { exact: false });
    expect(greet).toBeInTheDocument();
  });

  test("render good to see you when button is not clicked", () => {
    render(<Greeting />);
    const text = screen.getByText(/good to see you/i);
    expect(text).toBeInTheDocument();
  });

  test("renders changed! when button was clicked", () => {
    // Arrange
    render(<Greeting />);
    //    Act
    const buttonClicked = screen.getByRole("button");
    userEvent.click(buttonClicked);

    // Assert
    const changeOutput = screen.getByText(/Changed/i);
    expect(changeOutput).toBeInTheDocument();
  });
  test("Checksgood to see you,removed when button is clicked", () => {
    // Arrange
    render(<Greeting />);
    //  Act
    const buttonClicked = screen.getByRole("button");
    userEvent.click(buttonClicked);

    // Assert

    const OutputBeforeClick = screen.queryByText(/good to see you/i);
    expect(OutputBeforeClick).toBeNull();
  });
});
