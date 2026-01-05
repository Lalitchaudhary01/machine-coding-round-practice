"use client";
import React from "react";

const Modals = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed!");
    closeModal();
  };
  const handleCancel = () => {
    console.log("Cancelled!");
    closeModal();
  };
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOutsideClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-6">
              This is a sample modal. Do you want to proceed?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
