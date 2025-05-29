import { useNavigate, useParams } from "react-router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import User from "../../components/User/User";
import { removeUser } from "../../slices/userSlice";

const Username = () => {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState(null);

  const users = useSelector((state) => state.userInfo.users);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id === id);
      if (user) {
        setUserInfo(user);
      }
    }
  }, [id, users]);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
    console.log("Hitting");
    navigate("/users");
    console.log("deleted");
  };

  if (!id || !userInfo) {
    return <></>;
  }

  return (
    <div>
      <User
        id={userInfo.id}
        name={userInfo.name}
        jobRole={userInfo.jobRole}
        age={userInfo.age}
        contact={userInfo.contact}
        email={userInfo.email}
        deleteUser={() => deleteUser(userInfo.id)}
      />
    </div>
  );
};

export default Username;
