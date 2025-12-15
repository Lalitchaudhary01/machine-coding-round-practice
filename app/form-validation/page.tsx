"use client";
import React from "react";

const page = () => {
  const [input, setInput] = React.useState("");
  const [errors, setErrors] = React.useState<string | null>(null);

  const validateForm = () => {
    if (input.trim() === "") {
      setErrors("Input cannot be empty");
      return false;
    }
    setErrors(null);
    return true;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
        ></form>
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Form Validation
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
