import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { usePagination } from "./usePagination";

import { ReactComponent as Prev } from "./assets/images/arrowLeft.svg";
import { ReactComponent as Next } from "./assets/images/arrowRight.svg";

import style from "./Pagination.module.css";

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={cn(style.root, { [className]: className })}>
      <div
        className={cn(style.prev, {
          [style.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <Prev />
      </div>
      {paginationRange.map((pageNumber, index) => {
        return (
          <div
            key={index}
            className={cn(style.pageNumber, {
              [style.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <div>{pageNumber}</div>
          </div>
        );
      })}
      {/*  Right Navigation arrow */}
      <div
        className={cn(style.next, {
          [style.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Next />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
