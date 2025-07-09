import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Verify from "./pages/Verify/Verify";
import Products from "./pages/Products/Products";
import UserRoute from "./components/UserRoute";
import ShopRoute from "./components/ShopRoute";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleLogin } from "./slices/user";
import ShopDashboard from "./pages/ShopDashboard/ShopDashboard";
import Cart from "./pages/Cart/Cart";

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
        <Route element={<UserRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<ShopRoute />}>
          <Route path="/shop-dashboard" element={<ShopDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
