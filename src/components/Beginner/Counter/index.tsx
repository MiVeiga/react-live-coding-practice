//Question 1 : Create a component called Counter that:
// Displays a number on the screen (initial value: 0).
// Has two buttons: one to increment and one to decrement the value.
// The number cannot be less than 0.
// The component must be functional and use React Hooks.
// (Optional) Write unit tests to ensure the expected behavior.

//What should be done
//What we need to do here is make a simple counter component.
// It will start at zero and allow the user to increase or decrease
// that value with two buttons. But that value cannot be less than zero.

//Outline
//Create Counter component;
//Use useState to store the current value;
//Create  two functions : handleIncrement and handleDecrement;
//Prevent the number from going below zero;
//Render the number and buttons;

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="count-value">Current count: {count}</p>
      <button data-testid="btn-decrement" onClick={handleDecrement}>-</button>
      <button data-testid="btn-increment" onClick={handleIncrement}>+</button>
    </div>
  );
};
