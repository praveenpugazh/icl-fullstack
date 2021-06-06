import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Auth.module.css";
import { signin, signup } from "../../actions/auth";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const Auth = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignup);
  };
  const signupHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signup(formData, history));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className={styles.formContainer}>
        {isSignup ? <h2>Sign up</h2> : <h2>Login</h2>}
        <form action="">
          {isSignup && (
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          )}
          <br />
          {isSignup && (
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          )}
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          {/* {isSignup && <input type="password" placeholder="Confirm Password" />}
          <br /> */}
          {isSignup ? (
            <button onClick={signupHandler}>Sign up</button>
          ) : (
            <button onClick={loginHandler}>Log In</button>
          )}
          {isSignup ? (
            <button onClick={clickHandler}>
              Already have a account? Login
            </button>
          ) : (
            <button onClick={clickHandler}>
              Dont have an account? Sign up
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Auth;
