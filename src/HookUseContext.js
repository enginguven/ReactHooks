import React, { useContext, useState } from "react";
import { MovieContext } from "./App";

const GrandParent = () => {
  const moviesData = useContext(MovieContext);
  const [movies, setMovies] = useState(moviesData);
  return (
    <>
      {movies.map((movie) => (
        <Parent key={movie.id} movie={movie} />
      ))}
    </>
  );
};

const Parent = ({ movie }) => {
  return <div>{movie.Name}</div>;
};

export default GrandParent;
