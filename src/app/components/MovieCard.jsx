import React from "react";
import Link from "next/link";
const defImg =
  "https://m.media-amazon.com/images/M/MV5BYTQ2YjVjNzMtMDNiZS00MmIwLTgzNDEtMGY3ZGIwMWI4ZjNjXkEyXkFqcGdeQXVyMzUwNzgzNzg@._V1_SX300.jpg";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <Link href={`/movie/${movie.Id}`}>
        <div className="movie_title">
          <h1>{movie.Title}</h1>
        </div>
        <div className="">
          <img src={movie.Poster} alt="movie picture" className="movie_img" />
        </div>
        <div className="movie_under">
          <h1>Year:{movie.Year}</h1>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
