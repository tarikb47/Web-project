const movieService = () => {
  let topMovies = [];
  let recommendedMovies = [];
  let allMovies = [];
  let soonMovies = [];
  let searchMovies = [];
  let IdMovie;

  const getAllMovies = async () => {
    const url = "http://localhost:4000/movies";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      allMovies.push(...result);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecommendedMovies = async () => {
    await getAllMovies();

    try {
      recommendedMovies = allMovies.filter(
        (movie) => movie.Status === "recommended"
      );
    } catch (error) {
      console.error(error);
    }

    recommendedMovies = recommendedMovies.slice(0, 10);
    return recommendedMovies;
  };
  const getTopMovies = async () => {
    await getAllMovies();

    try {
      topMovies = allMovies.filter((movie) => movie.Status === "top");
    } catch (error) {
      console.error(error);
    }

    topMovies = topMovies.slice(0, 10);
    return topMovies;
  };
  const getSoonMovies = async () => {
    await getAllMovies();

    try {
      soonMovies = allMovies.filter((movie) => movie.Status === "soon");
    } catch (error) {
      console.error(error);
    }

    soonMovies = soonMovies.slice(0, 10);
    return soonMovies;
  };
  const getSearchMovies = async ({ film }) => {
    await getAllMovies();

    try {
      const searchTerm = film.toLowerCase();
      searchMovies = allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm)
      );
    } catch (error) {
      console.error(error);
    }

    return searchMovies;
  };
  const getIdMovie = async ({ movie_id }) => {
    await getAllMovies();
    try {
      IdMovie = allMovies.filter((movie) => movie.Id === movie_id);
    } catch (error) {
      console.error(error);
    }
    return IdMovie[0];
  };

  return {
    getRecommendedMovies,
    getTopMovies,
    getSoonMovies,
    getSearchMovies,
    getIdMovie,
  };
};

export default movieService;
