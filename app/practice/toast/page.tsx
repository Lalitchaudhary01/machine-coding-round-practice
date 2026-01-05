"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ToastNotification = () => {
  const notify = () => {
    toast("This is a toast notification!");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={notify}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;
