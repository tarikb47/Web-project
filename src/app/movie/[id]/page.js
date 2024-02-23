"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import movieService from "@/Services/movieService";

const page = ({ params }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const id = params.id;
    const fetchData = async () => {
      if (params.id) {
        const res = await movieService().getIdMovie({ movie_id: id });
        setMovie(res);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-auto w-4/5">
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <Link className="back_btn" href={"/"}>
            Back
          </Link>
        </div>

        <div className="flex justify-center">
          <img src={movie.Poster} alt="movie picture" className="movie_image" />
        </div>
        <div className="movie_under movie_genre">
          <h1>{movie.Genre}</h1>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="idmovie_title flex justify-start">
          <h1>{movie.Title}</h1>
        </div>
        <div className="flex flex-col movie_description">
          <h2>Rating: {movie.Rating}</h2>
          <h2>Released: {movie.Released}</h2>
          <h2>Duration: {movie.Runtime}</h2>
          <h2>Actors: {movie.Actors}</h2>
          <h2>Language: {movie.Language}</h2>
          <h2>Plot: {movie.Plot}</h2>
        </div>
      </div>
    </div>
  );
};

export default page;

// import React from "react";

// export default function Page({ params }) {
//   return <div>{params.id}</div>;
// }
