"use client";
import MovieCard from "../components/MovieCard";
import React, { useEffect, useState } from "react";
import movieService from "@/Services/movieService";
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const topMovies = await movieService().getTopMovies();
        setMovies(topMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopMovies();
  }, []);
  return (
    <div>
      <div className="title">
        <h1>Top rated movies</h1>
      </div>
      <div className="flex">
        <div></div>
        <div className="movies-space grid lg:grid-cols-5 w-70 md:grid-cols-2 sm:grid-cols-1">
          {movies.map((movie) => (
            <MovieCard key={movie.Id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
