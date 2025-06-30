import React from "react";
import { useState } from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [activeState, setActiveState] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/signup", {
        name,
        email,
        password,
      });
      toast.success(response.data.msg, {
        position: "top-center",
      });
      clearInputs();
    } catch (error) {
      toast.error(error.msg, {
        position: "top-center",
      });
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        clearInputs();
      }
      toast.error(response.data.msg, {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.msg, {
        position: "top-center",
      });
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="home">
      <div className={`container ${activeState ? "right-panel-active" : ""}`}>
        <ToastContainer />
        <div className="form-container sign-up-container">
          <form>
            <h1 className="home__title">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="home__btn" onClick={signup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="home__title">Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot Password?</a>
            <button className="home__btn" onClick={signin}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="home__title">Welcome Back!</h1>
              <p>To keep connected with us please login with personal info</p>
              <button
                className="ghost home__btn"
                onClick={() => setActiveState(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="home__title">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost home__btn"
                onClick={() => setActiveState(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
