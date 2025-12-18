"use client";
import React from "react";

const SearchFilter = () => {
  const [search, setSearch] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState<string[]>([]);

  const data = [
    "Learn React",
    "Build a Todo App",
    "Explore Next.js",
    "Understand TypeScript",
    "Master Tailwind CSS",
  ];

  // 🔹 Debounce effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredResults(filtered);
    }, 500); // ⏱ 500ms debounce

    return () => clearTimeout(timer); // 👈 important
  }, [search]);

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
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
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

export default SearchFilter;
