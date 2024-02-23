"use client";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import React, { useEffect, useState } from "react";
import movieService from "@/Services/movieService";
import Image from "next/image";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isRecommended, setIsRecommended] = useState(true);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const recommendedMovies = await movieService().getRecommendedMovies();
        setMovies(recommendedMovies);
        setIsRecommended(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendedMovies();
  }, []);

  const handleSearch = async (searchMovies) => {
    if (searchMovies.length === 0) {
      setMovies([]);
      setIsRecommended(false);
    } else {
      setMovies(searchMovies);
      setIsRecommended(false);
    }
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="title">
        <h1>{isRecommended ? "Recommended Movies" : "Search Results"}</h1>
      </div>
      <div className="flex">
        {movies.length > 0 ? (
          <div className="movies-space grid lg:grid-cols-5 w-70 md:grid-cols-2 sm:grid-cols-1">
            {movies.map((movie) => (
              <MovieCard key={movie.Id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col h-fit w-fit m-auto">
            <div className="message">
              <h1>Movie not found</h1>
            </div>
            <div>
              <Image
                src="/assets/images/film-not-found.jpg"
                alt="Film not found"
                width={800}
                height={450}
              ></Image>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
