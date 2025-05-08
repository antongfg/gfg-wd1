import React from "react";
import "./User.css";

const User = ({ name, age }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h1 className="user__title">User: {name}</h1>
      <h3
        style={{
          paddingTop: "20px",
        }}
      >
        {age}
      </h3>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default User;
