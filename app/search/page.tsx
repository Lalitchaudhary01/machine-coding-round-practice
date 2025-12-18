"use client";
import React from "react";

const SearhFilter = () => {
  const [search, setSearch] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState<string[]>([]);
  const data = [
    "Learn React",
    "Build a Todo App",
    "Explore Next.js",
    "Understand TypeScript",
    "Master Tailwind CSS",
  ];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Search Filter
        </h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="mt-4">
          {filteredResults.map((item, index) => (
            <li key={index} className="py-1 border-b">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearhFilter;
