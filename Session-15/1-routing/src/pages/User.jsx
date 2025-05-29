import React from "react";
import { useNavigate, useParams } from "react-router";

const User = () => {
  const { username } = useParams();

  const navigate = useNavigate();

  function handleData() {
    console.log("Getting or checking data.....");

    navigate("/about");
  }

  return (
    <div>
      <h3>User: {username}</h3>
      <button onClick={handleData}>Take me there</button>
    </div>
  );
};

export default User;
