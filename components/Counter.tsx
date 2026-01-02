import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    if (count >= 10) {
      alert("Count reached 10!");
      // count cant go beyond 10
      setCount(10);
    }
  };
  const decrement = () => {
    setCount(count - 1);
    if (count <= -10) {
      alert("Count reached -10!");
      // count cant go beyond -10
      setCount(-10);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col">
      <h1 className="mt-16 flex items-center justify-center">Counter app</h1>
      <div className="m-16 flex items-center justify-center text-4xl">
        {count}
      </div>
      <div className="mtgap flex-4">
        <button>
          <span
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={increment}
          >
            +
          </span>
          <span
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={reset}
          >
            reset
          </span>

          <span
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={decrement}
          >
            -
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
