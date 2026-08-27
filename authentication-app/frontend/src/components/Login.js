import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/login",
        user
      );

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/dashboard");

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  return (
    <div className="container">
      <div className="box">

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        <button onClick={loginUser}>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;