import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonGroup.module.css";

const ButtonGroup = ({ btn1, btn2, btn3, onClick }) => {
  const handleCLick = (val) => {
    onClick && onClick(val);
  };

  return (
    <div className={style.root} data-testid="buttonGroup">
      <div className={style.container}>Elément par page</div>
      <div className={style.buttons}>
        <div onClick={(e) => handleCLick(Number(e.target.innerText))}>
          {btn1}
        </div>
        <div onClick={(e) => handleCLick(Number(e.target.innerText))}>
          {btn2}
        </div>
        <div onClick={(e) => handleCLick(Number(e.target.innerText))}>
          {btn3}
        </div>
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  btn1: PropTypes.number,
  btn2: PropTypes.number,
  btn3: PropTypes.number,
  onClick: PropTypes.func,
};
export default ButtonGroup;
