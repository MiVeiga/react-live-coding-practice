import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from ".";

describe("Counter", () => {
  it("should render intial value as 0", () => {
    render(<Counter />);

    expect(screen.getByTestId("count-value")).toHaveTextContent(
      "Current count: 0"
    );
  });
  it("should increment count", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("btn-increment");

    fireEvent.click(incrementButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent(
      "Current count: 1"
    );
  });

  it("should decrement if value is greater than 0", ()=>{
    render(<Counter/>)
    const incrementButton = screen.getByTestId('btn-increment')
    const decrementButton = screen.getByTestId('btn-decrement')
    fireEvent.click(incrementButton)
    fireEvent.click(decrementButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent("Current count: 0")
  })
});
