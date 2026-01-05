"use client";
import React from "react";

const TextProgress = () => {
  const [text, setText] = React.useState("");

  const max = 10;
  const progress = Math.min((text.length / max) * 100, 100); // cap at 100%

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Text Progress (max 10 letters)
        </h2>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, max))}
          className="w-full border rounded-lg px-3 py-2 mb-3"
          placeholder="Type here…"
        />

        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm mt-2 text-gray-600 text-center">
          {text.length} / {max} letters
        </p>
      </div>
    </div>
  );
};

export default TextProgress;
