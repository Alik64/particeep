import React from "react";
import logo from "../../assets/images/logo.svg";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src={logo} alt="particeep logo" />
        </div>
        <div className={style.contributor}>Barsamov Albert</div>
      </div>
    </div>
  );
};

export default Header;
