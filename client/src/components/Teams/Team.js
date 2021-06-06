import React, { useState } from "react";
import styles from "./Team.module.css";
const Team = ({ data }) => {
  const [fav, setFav] = useState(false);
  return (
    <div className={styles.teamContainer}>
      <p className={styles.text}>{data}</p>
      <p onClick={() => setFav(!fav)}> {!fav ? "❤" : "❤️"}</p>
    </div>
  );
};

export default Team;
