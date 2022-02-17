import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  function incrementHandler() {
    setCount((count) => count + 1);
  }
  function decrementHandler() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <h1 title="title">Counter</h1>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <p>
        count is : <span title="display">{count}</span>
      </p>
    </>
  );
}
export default Counter;
