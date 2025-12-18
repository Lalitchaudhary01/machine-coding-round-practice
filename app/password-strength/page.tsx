"use client";

import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");

  const evaluateStrength = (pwd: string) => {
    if (pwd.length < 6) return "Weak";
    if (pwd.length < 10) return "Moderate";
  
    return "Strong";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(evaluateStrength(value));
  };

  const strengthColor =
    strength === "Weak"
      ? "text-red-500"
      : strength === "Moderate"
      ? "text-yellow-500"
      : "text-green-600";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-black p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Password Strength Checker
        </h1>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="mt-4 text-lg">
          Password Strength:{" "}
          <span className={`font-semibold ${strengthColor}`}>{strength}</span>
        </p>
      </div>
    </div>
  );
};

export default Password;
