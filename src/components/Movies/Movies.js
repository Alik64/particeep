import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { movies$ } from "../../data/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await movies$;
      setMovies(result);
    };
    fetchData();
  }, []);
  console.log("movies : ", movies);
  return (
    <div>
      <Card data={movies} />
    </div>
  );
};

export default Movies;
