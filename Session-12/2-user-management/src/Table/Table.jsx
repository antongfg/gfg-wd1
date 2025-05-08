import React from "react";

const Table = ({ users, deleteUser, loadData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Contact</th>
          <th>Image</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.contact}</td>
              <td>
                <img src={user.imageUrl} alt="pic" />
              </td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
                <button onClick={() => loadData(user, index)}>Update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
