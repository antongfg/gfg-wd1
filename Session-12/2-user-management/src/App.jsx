import React, { useEffect, useState } from "react";
import Table from "./Table/Table";

const App = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
    imageUrl: "",
  });

  const [users, setUsers] = useState([]);

  const [userId, setUserId] = useState("");

  const [buttonSt, setButtonSt] = useState("Add");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserInput((currInput) => {
      return {
        ...currInput,
        [id]: value,
      };
    });
  };

  console.log(users);

  const handleClick = (event) => {
    event.preventDefault();
    setUsers((currUsers) => {
      let newUsers = [...currUsers, userInput];
      store(newUsers);
      return newUsers;
    });
    setUserInput({
      name: "",
      email: "",
      age: "",
      contact: "",
      imageUrl: "",
    });
  };

  function deleteUser(id) {
    setUsers((currUsers) => {
      let newUsers = currUsers.filter((user, index) => index !== id);
      store(newUsers);
      return newUsers;
    });
  }

  function loadData(user, id) {
    setUserInput(user);
    setUserId(id);
    setButtonSt("Update");
  }

  function updateUser(event) {
    event.preventDefault();
    setUsers((currUsers) => {
      let newUsers = currUsers.map((user, index) => {
        if (index === userId) {
          return userInput;
        }
        return user;
      });
      store(newUsers);
      return newUsers;
    });
    setUserInput({
      name: "",
      email: "",
      age: "",
      contact: "",
      imageUrl: "",
    });
    setButtonSt("Add");
  }

  function store(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getInitialData() {
    const users = JSON.parse(localStorage.getItem("users"));
    setUsers(users);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={userInput.name}
        />
        <br />
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={userInput.email}
        />
        <br />
        <br />
        <input
          id="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          value={userInput.age}
        />
        <br />
        <br />
        <input
          id="contact"
          type="number"
          placeholder="Contact"
          onChange={handleChange}
          value={userInput.contact}
        />
        <br />
        <br />
        <input
          id="imageUrl"
          type="url"
          placeholder="Image url"
          onChange={handleChange}
          value={userInput.imageUrl}
        />
        <br />
        <br />
        <button
          id="add"
          onClick={buttonSt === "Add" ? handleClick : updateUser}
        >
          {buttonSt} Info
        </button>
      </form>

      <Table users={users} deleteUser={deleteUser} loadData={loadData} />
    </div>
  );
};

export default App;
