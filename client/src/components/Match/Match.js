import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Match.module.css";

const Match = ({ data }) => {
  const history = useHistory();
  const getMatch = () => history.push(`/match/${data._id}`);
  return (
    <>
      <div className={styles.matchCard}>
        <div className={styles.matchHeader}>
          <h2>{data.team1}</h2>
          <span>VS</span>
          <h2>{data.team2}</h2>
        </div>
        <div className={styles.matchDetails}>
          <p>
            {data.toss_winner} won the toss and chose to {data.toss_decision}
          </p>
          <p>{data.date}</p>
          <p>MOM: {data.player_of_match}</p>
          <button onClick={getMatch} className={styles.detailsBtn}>
            Match Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Match;
