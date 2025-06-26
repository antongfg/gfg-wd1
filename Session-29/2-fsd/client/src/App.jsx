import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:4003/users");
      setUsers(data.users);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <p>{user.name}</p>
                <p>{user.age}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
