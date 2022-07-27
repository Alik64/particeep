import React, { useEffect, useMemo, useState } from "react";
import { movies$ } from "../../data/movies";
import MySelect from "../UI/MySelect";

import Card from "./Card";

import style from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectSort, setSelectSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let result = await movies$;
      setMovies(result);
    };
    fetchData();
  }, []);

  const moviesCategories = () => {
    const categories = movies?.map((movies) => movies.category);
    const [...arrOfOptions] = new Set(categories);
    return arrOfOptions;
  };

  const sortedMovies = useMemo(() => {
    if (selectSort === "all") {
      return movies;
    }
    if (selectSort) {
      console.log("selectSort : ", selectSort);
      return [...movies].filter((movie) => movie.category === selectSort);
    }

    return movies;
  }, [selectSort, movies]);

  const sortMovies = (sort) => {
    setSelectSort(sort);
  };
  console.log("movies : ", movies);

  return (
    <div className={style.root}>
      <div className={style.movies_filter}>
        <MySelect
          onChange={sortMovies}
          defaultValue="Catégories"
          value={selectSort}
          options={moviesCategories()}
        />
      </div>

      <div className={style.movies_list}>
        {sortedMovies?.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
