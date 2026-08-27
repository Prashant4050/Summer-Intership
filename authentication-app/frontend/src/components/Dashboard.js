import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/dashboard",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setUser(res.data.user);
    } catch (err) {
      alert("Please login first.");
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="dashboard">

        <h1>Welcome</h1>

        <div className="profile">
          <h3>User Information</h3>

          <p><strong>User ID:</strong> {user?.id}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Status:</strong> Logged In ✅</p>
        </div>

        <button className="btn" onClick={getDashboard}>
          Refresh Dashboard
        </button>

        <button className="logout" onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;