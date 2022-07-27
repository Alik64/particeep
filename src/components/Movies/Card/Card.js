import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Delete } from "./assets/images/delete.svg";
import Barre from "./Barre";

import Like from "./assets/images/likeEmpty.png";
import Liked from "./assets/images/likeFilled.png";
import Dislike from "./assets/images/dislikeEmpty.png";
import Disliked from "./assets/images/dislikeFilled.png";

import style from "./Card.module.css";

const Card = ({ title, category, likes, dislikes }) => {
  return (
    <div className={style.card}>
      <div className={style.card__header}>
        <h1 className={style.card__title}>{title}</h1>
        <div className={style.card__delete}>
          <Delete />
        </div>
      </div>
      <div className={style.card__body}>
        <h2>{category}</h2>
      </div>

      <div className={style.card__footer}>
        <div className={style.card__gauge}>
          <Barre likes={likes} dislikes={dislikes} />
        </div>
        <div className={style.card__stats}>
          <div className={style.card__likes}>
            <img src={Like} alt="Thumb up" width={30} height={30} />
            <h3>{likes}</h3>
          </div>
          <div className={style.card__dislikes}>
            <img src={Dislike} alt="Thumb down" width={30} height={30} />
            <h3>{dislikes}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  likes: 0,
  dislikes: 0,
};

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default Card;
