import React, { useEffect, useState } from "react";
import "./Barre.css";

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
    <div className="barre">
      <div className="barre_content">
        <div className="barre_progress">
          <div
            className="barre_avancement"
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

// function colorPicker(width) {
//     switch (true) {
//         case (width < 26):
//             return '#7160e8' // violet
//         case (width < 51):
//             return '#60ade8'  // blue
//         case (width < 76):
//             return '#60e8b6' // lightGreen
//         case (width < 101):
//             return '#30db63' // green
//         default:
//             return
//     }
// }
