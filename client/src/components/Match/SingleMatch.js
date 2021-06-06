import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatch } from "../../actions/match";
import { useParams, useHistory } from "react-router-dom";
import styles from "./SingleMatch.module.css";
const SingleMatch = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMatch(id));
  }, [id, dispatch]);
  const data = useSelector((state) => state.matches.match);
  console.log(data);
  const backBtn = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={backBtn}>
        Back
      </button>
      {!data && <h2>Loading...</h2>}
      {data && (
        <div className={styles.MatchDetails}>
          <h2>
            {data.data.data.team1} VS {data.data.data.team2}
          </h2>
          <p>
            Toss: {data.data.data.toss_winner} won the toss and chose to{" "}
            {data.data.data.toss_decision}
          </p>
          <h2>Winner: {data.data.data.winner}</h2>
          {data.data.data.win_by_runs === "0" ? (
            <p> Won by {data.data.data.win_by_wickets} wickets</p>
          ) : (
            <p> Won by {data.data.data.win_by_runs} runs</p>
          )}
          <p>MOM: {data.data.data.player_of_match}</p>
          <p>Venue: {data.data.data.venue}</p>
          <p>City: {data.data.data.city}</p>
        </div>
      )}
    </div>
  );
};

export default SingleMatch;
