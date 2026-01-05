"use client";
import React from "react";

const PasswordShow = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col">
      <h1 className="mt-16 flex items-center justify-center">
        Show/Hide Password
      </h1>
      <div className="m-16 flex items-center justify-center text-4xl">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mtgap flex-4">
        <button
          onClick={handleTogglePassword}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
    </div>
  );
};

export default PasswordShow;
