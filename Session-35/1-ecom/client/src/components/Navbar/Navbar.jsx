import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeUser } from "../../slices/user";

const Navbar = () => {
  const user = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div>
          <h1>Zepzon</h1>
        </div>
        <ul>
          {user?.userType === 2 && (
            <Link to="/products">
              <li>Products</li>
            </Link>
          )}
          {user?.userType === 2 && (
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          )}
          {user?.userType === 3 && (
            <Link to="/shop-dashboard">
              <li>Dashboard</li>
            </Link>
          )}{" "}
          {user?.userType === 2 && (
            <Link to="/orders">
              <li>Your Orders</li>
            </Link>
          )}
          {user && <li>{user?.name}</li>}
          {user ? (
            <li onClick={logout}>Logout</li>
          ) : (
            <Link to="/">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
