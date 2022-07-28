import React from "react";
import logo from "../../assets/images/logo.svg";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.root} data-testid="header">
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src={logo} alt="particeep logo" data-testid="logo" />
        </div>
        <div className={style.contributor} data-testid="contributor">
          Barsamov Albert
        </div>
      </div>
    </header>
  );
};

export default Header;
