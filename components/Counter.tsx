import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="min-h-screen flex items-center justify-center">
        Counter app
      </h1>
      <div className="text-4xl">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
