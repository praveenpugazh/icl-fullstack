import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatches } from "../../actions/match";
import Match from "./Match";
import styles from "./MatchList.module.css";

const MatchList = () => {
  const dispatch = useDispatch();
  const [filterYear, setFilterYear] = useState("2019");
  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  const { data } = useSelector((state) => state.matches.matches);

  const yearChangeHandler = (e) => {
    setFilterYear(e.target.value);
  };
  return (
    <>
      <h1>All Matches from </h1>
      <div className={styles.select}>
        <select value={filterYear} onChange={yearChangeHandler}>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <div className={styles.matchListContainer}>
        {data ? (
          data
            .filter((item) => item.season === filterYear)
            .map((item) => <Match key={item._id} data={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default MatchList;
