"use client";
import React from "react";

const page = () => {
  const [notes, setNotes] = React.useState<string[]>([]);
  const [input, setInput] = React.useState("");
  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input.trim()]);
      setInput("");
    }
  };
  const removeNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };
  const updateNote = (index: number, value: string) => {
    const newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Notes App
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a note..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="flex justify-between">
              <input
                type="text"
                value={note}
                onChange={(e) => updateNote(index, e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeNote(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
