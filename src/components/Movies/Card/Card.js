import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  likeMovie,
  unlikeMovie,
  dislikeMovie,
  undislikeMovie,
  deleteMovie,
} from "../../../redux/moviesSlice";

import { ReactComponent as Delete } from "./assets/images/delete.svg";
import Barre from "./Barre";
import Unliked from "./assets/images/likeEmpty.png";
import Liked from "./assets/images/likeFilled.png";
import Undisliked from "./assets/images/dislikeEmpty.png";
import Disliked from "./assets/images/dislikeFilled.png";

import style from "./Card.module.css";

const Card = ({ id, title, category, likes, dislikes }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const dispatch = useDispatch();

  const handleLikeClick = (id) => {
    if (!liked) {
      if (disliked) {
        dispatch(undislikeMovie(id));
        setDisliked(false);
      }
      dispatch(likeMovie(id));
      setLiked(true);
    } else {
      dispatch(unlikeMovie(id));
      setLiked(false);
    }
  };
  const handleDislikeClick = (id) => {
    if (!disliked) {
      if (liked) {
        dispatch(unlikeMovie(id));
        setLiked(false);
      }
      dispatch(dislikeMovie(id));
      setDisliked(true);
    } else {
      dispatch(undislikeMovie(id));
      setDisliked(false);
    }
  };
  const handleDelete = (id) => {
    console.log("helllo");
    dispatch(deleteMovie(id));
  };
  return (
    <div className={style.card} data-testid="card">
      <div className={style.card_header}>
        <h1 className={style.card_title} data-testid="card_title">
          {title}
        </h1>
        <div className={style.card_delete} onClick={() => handleDelete(id)}>
          <Delete />
        </div>
      </div>
      <div className={style.card_body}>
        <h2 data-testid="card_category">{category}</h2>
      </div>

      <div className={style.card_footer}>
        <div className={style.card_gauge} data-testid="card_gauge">
          <Barre likes={likes} dislikes={dislikes} />
        </div>
        <div className={style.card_stats} data-testid="card_stats">
          <div className={style.card_likes} onClick={() => handleLikeClick(id)}>
            {liked ? (
              <img
                src={Liked}
                alt="Thumb up filled"
                width={30}
                height={30}
                data-testid="card_liked"
              />
            ) : (
              <img
                src={Unliked}
                alt="Thumb up"
                width={30}
                height={30}
                data-testid="card_unliked"
              />
            )}
            <h3>{likes}</h3>
          </div>
          <div
            className={style.card_dislikes}
            onClick={() => handleDislikeClick(id)}
          >
            {disliked ? (
              <img
                src={Disliked}
                alt="Thumb up filled"
                width={30}
                height={30}
                data-testid="card_disliked"
              />
            ) : (
              <img
                src={Undisliked}
                alt="Thumb up filled"
                width={30}
                height={30}
                data-testid="card_undisliked"
              />
            )}

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
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default Card;
