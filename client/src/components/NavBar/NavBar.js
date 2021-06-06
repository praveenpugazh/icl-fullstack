import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [isUser, setIsUser] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setIsUser(null);
  };

  useEffect(() => {
    setIsUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={styles.navBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <h1 className={styles.title}>Indian Cricket League</h1>
          </Link>
        </div>
        <div className={styles.navItems}>
          <ul className={styles.navLinks}>
            <Link to="/teams">
              <li className={styles.navItem}>Teams</li>
            </Link>
            {isUser && (
              <li className={styles.navItem}>Welcome, {isUser.result.name}</li>
            )}
          </ul>
          {!isUser ? (
            <Link to="/auth">
              <button className={styles.signBtn}>Sign in</button>
            </Link>
          ) : (
            <Link to="/auth">
              <button className={styles.signBtn} onClick={logoutHandler}>
                Log out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
