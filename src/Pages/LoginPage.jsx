import React, { useState } from "react";
import CloseBtn from "../Components/CloseBtn.jsx";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/auth.slice.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogIn = async () => {
    const userData = { username, password };
    dispatch(loginUser(userData));
    navigate("/");
  };

  return (
    <div>
      <CloseBtn link="/"></CloseBtn>
      <h1 className="text-5xl RhodiumLibre text-center text-white mt-10 stroke">
        Log In
      </h1>
      <div className="flex flex-col items-center mt-14">
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="username"
            className="RhodiumLibre stroke mb-2 text-white tracking-wider text-2xl"
          >
            USERNAME
          </label>
          <input
            className="w-full h-24 rounded-xl custom-shadow p-4 text-2xl"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/2 mt-16">
          <label
            htmlFor="password"
            className="RhodiumLibre stroke mb-2 text-white tracking-wider text-2xl"
          >
            PASSWORD
          </label>
          <input
            className="w-full h-24 rounded-xl custom-shadow p-4 text-2xl"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={onLogIn}
          className="LandingBtnStart w-1/2 h-20 rounded-xl mt-14 RhodiumLibre text-3xl stroke text-white hover:bg-cyan-700"
        >
          Log In
        </button>
        <a href="/registration" className="mt-5 underline">
          Not Registered?
        </a>
      </div>
      <h1 className="text-5xl RhodiumLibre text-center text-white mt-20 stroke">
        Or
      </h1>
    </div>
  );
};

export default LoginPage;
