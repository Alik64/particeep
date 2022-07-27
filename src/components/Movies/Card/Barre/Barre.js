import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./Barre.module.css";

export default function Barre({ likes, dislikes }) {
  const total = likes + dislikes;

  const [pourcentage, setPourcentage] = useState(total);

  useEffect(() => {
    if (total === 0) {
      setPourcentage(50);
      return;
    }
    const width = (likes * 100) / total;
    setPourcentage(width);
  }, [dislikes, likes]);

  return (
    <div className={style.barre}>
      <div className={style.barre_content}>
        <div className={style.barre_progress}>
          <div
            className={style.barre_avancement}
            style={{
              width: `${pourcentage}%`,
              backgroundColor: `var(--customDarkViolet)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

Barre.defaultProps = {
  likes: 0,
  dislikes: 0,
};

Barre.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};
