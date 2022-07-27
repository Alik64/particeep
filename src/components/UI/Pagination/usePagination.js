import { useMemo } from "react";
import PropTypes from "prop-types";

export const usePagination = ({ totalCount, pageSize, currentPage }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const pages = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalCount, pageSize, currentPage]);
  console.log("paginationRange : ", paginationRange);
  return paginationRange;
};

usePagination.propTypes = {
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
};
