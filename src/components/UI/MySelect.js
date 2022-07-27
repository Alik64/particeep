import React from "react";
import PropTypes from "prop-types";

import { v4 as uuidv4 } from "uuid";

import style from "./MySelect.module.css";

export default function MySelect({ options, defaultValue, value, onChange }) {
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={style.root}>
      <label for="mySelect">Catégories</label>
      <select value={value} onChange={handleChange} id="mySelect">
        <option disabled value="">
          {defaultValue}
        </option>
        <option value="all">All</option>
        {options.map((option) => (
          <option key={uuidv4()} value={option}>
            {" "}
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

MySelect.propTypes = {
  options: PropTypes.node,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
