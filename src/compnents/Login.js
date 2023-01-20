import React from "react";
import { useState } from "react";
// import {useNavigate} from "react-router-dom"
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
  const [credantials, setcredantials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://i-notebook-two.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credantials.email,
        password: credantials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.sucess) {
      //redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Logged in successfully", "success");
    } else {
      props.showAlert("login with correct creedantals", "danger");
    }
  };
  const onChange = (e) => {
    setcredantials({ ...credantials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-3 my-3">
        <h2>Login to continue to iNotebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credantials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={credantials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
