"use client";
import React, { useState } from "react";
import movieService from "@/Services/movieService";

export default function Search({ onSearch }) {
  const [film, setFilm] = useState("");

  const handleSearch = (event) => {
    setFilm(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (film !== "") {
      try {
        const searchMovies = await movieService().getSearchMovies({ film });
        onSearch(searchMovies);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          id="film"
          type="text"
          placeholder="Search for a movie..."
          className="w-80 p-2 mr-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-red-900 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
}
