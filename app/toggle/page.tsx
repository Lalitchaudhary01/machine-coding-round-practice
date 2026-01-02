"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isON, setIsON] = useState(false);
  const handleToggle = () => {
    setIsON(!isON);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col">
      <h1 className="mt-16 flex items-center justify-center">Toggle Button</h1>
      <div className="m-16 flex items-center justify-center text-4xl">
        {isON ? "ON" : "OFF"}
      </div>
      <div className="mtgap flex-4">
        <button
          onClick={handleToggle}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Toggle;
