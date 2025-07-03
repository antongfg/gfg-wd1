import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Verify from "./pages/Verify/Verify";
import Products from "./pages/Products/Products";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleLogin } from "./slices/user";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userInfo.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!user && token) {
      dispatch(handleLogin(token));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/verify/:token" element={<Verify />} />
        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
