import React, { useEffect, useMemo, useState } from "react";
import { movies$ } from "../../data/movies";
import MySelect from "../UI/MySelect/MySelect";
import Pagination from "../UI/Pagination/Pagination";

import Card from "./Card";

import style from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectSort, setSelectSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [totalCount, setTotalCount] = useState(movies.length);

  console.log("totalCount : ", totalCount);

  useEffect(() => {
    const fetchData = async () => {
      let result = await movies$;
      setMovies(result);
      setTotalCount(result.length);
    };
    fetchData();
  }, []);

  const moviesCategories = () => {
    const categories = movies?.map((movies) => movies.category);
    const [...filteredCategories] = new Set(categories);
    return filteredCategories;
  };

  const sortedMovies = useMemo(() => {
    if (selectSort === "all") {
      setCurrentPage(1);
      setTotalCount(movies.length);
      return movies;
    }
    if (selectSort) {
      setCurrentPage(1);

      const sortedMovies = [...movies].filter(
        (movie) => movie.category === selectSort
      );
      setTotalCount(sortedMovies.length);
      return sortedMovies;
    }

    return movies;
  }, [selectSort, movies]);

  const currentMoviesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return sortedMovies.slice(firstPageIndex, lastPageIndex);
  }, [selectSort, currentPage, movies]);

  const sortMovies = (sort) => {
    setSelectSort(sort);
  };

  return (
    <div className={style.root}>
      <div className={style.movies_filter}>
        <MySelect
          onChange={sortMovies}
          defaultValue="Catégories"
          value={selectSort}
          options={moviesCategories()}
        />
        <div className={style.movies_display}>
          <div>4</div>
          <div>8</div>
          <div>12</div>
        </div>
      </div>

      <div className={style.movies_list}>
        {currentMoviesData?.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        ))}
      </div>

      <div className={style.movies_pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Movies;
