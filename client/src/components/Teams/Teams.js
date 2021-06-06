import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatches } from "../../actions/match";
import Team from "./Team";
import styles from "./Teams.module.css";
const Teams = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);
  const { data } = useSelector((state) => state.matches.matches);
  console.log(data);
  const unique = [...new Set(data.map((item) => item.team1))];
  console.log(unique);
  return (
    <div className={styles.container}>
      <h1>Teams</h1>
      {unique ? (
        unique.map((team) => <Team data={team} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Teams;
