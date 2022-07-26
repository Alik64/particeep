import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { movies$ } from "../../data/movies";
import style from "./Movies.module.css";
const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let result = await movies$;
      setMovies(result);
    };
    fetchData();
  }, []);
  console.log("movies : ", movies);
  return (
    <div className={style.moviesList}>
      {movies?.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          dislikes={movie.dislikes}
        />
      ))}
    </div>
  );
};

export default Movies;
