import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Users.css"
const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate();

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }} className="content">
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar" height="100px" width="100px"
              className="user-avatar"
            />
            <div className="user">
            <span className="username">{user.login}</span>
            <button
              onClick={() => navigate(`/users/user/${user.login}`)}
              className="view-btn"
            >
              View User
            </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/about">Go to aboutUs page</Link>
      <br></br>
      <Link to="/">Go to Home page</Link>
      <br />
      <button onClick={()=> navigate("/search")}>Go To Search Page</button>


    </div>
  );
};

export default Users;