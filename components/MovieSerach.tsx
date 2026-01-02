"use client";
import { useState } from "react";

export default function ShowPage() {
  const [shows, setShow] = useState<any[]>([]);

  const fetchMovies = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=dark");
    const data = await res.json();
    setShow(data);
  };

  return (
    <div className="p-4">
      <button onClick={fetchMovies} className="border px-4 py-2 mb-4">
        Load Shows
      </button>

      {shows.map((item) => (
        <p key={item.show.id}>{item.show.name}</p>
      ))}
    </div>
  );
}
