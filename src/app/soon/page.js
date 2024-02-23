"use client";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import movieService from "@/Services/movieService";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchSoonMovies = async () => {
      try {
        const soonMovies = await movieService().getSoonMovies();
        setMovies(soonMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSoonMovies();
  }, []);
  return (
    <div>
      <div className="title">
        <h1>Coming soon movies</h1>
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
