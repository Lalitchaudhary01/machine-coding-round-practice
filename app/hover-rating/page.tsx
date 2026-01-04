"use client";
import React from "react";

const HoverRating = () => {
  const [rating, setRating] = React.useState(0); // final rating
  const [hover, setHover] = React.useState(0); // hover preview
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    if (rating === 0) return setMessage("⭐ Please select a rating first!");
    setMessage(`You rated: ${rating} ⭐`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Hover + Click Rating
        </h1>

        <div className="flex justify-center space-x-4 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`text-4xl cursor-pointer ${
                star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)} // 👈 click to lock rating
            >
              ★
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Submit Rating
        </button>

        {message && (
          <p className="text-center mt-3 font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default HoverRating;
