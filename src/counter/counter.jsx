import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDelete = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Delete</button>
      <br/>
    </div>
  );
}

export default Counter;
