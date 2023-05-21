import React, { useState } from "react";
import CloseBtn from "../Components/CloseBtn.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/slice/auth.slice.js";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setReapeatPassword] = useState("");

  const dispatch = useDispatch();

  const onRegister = async () => {
    if (password !== repeatPassword) {
      return alert("Passwords don't match");
    }
    if (!username || !password || !repeatPassword) {
      return alert("Enter the empty fields");
    }

    const userData = {
      username,
      password,
    };

    dispatch(createUser(userData));
  };

  return (
    <div>
      <CloseBtn link="/"></CloseBtn>
      <h1 className="text-5xl RhodiumLibre text-center text-white mt-10 stroke">
        Registration
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
        <div className="flex flex-col w-1/2 mt-16">
          <label
            htmlFor="password"
            className="RhodiumLibre stroke mb-2 text-white tracking-wider text-2xl"
          >
            REPEAT PASSWORD
          </label>
          <input
            className="w-full h-24 rounded-xl custom-shadow p-4 text-2xl focus:overflow-hidden"
            type="password"
            name="password"
            value={repeatPassword}
            onChange={(e) => setReapeatPassword(e.target.value)}
          />
        </div>
        <button
          onClick={onRegister}
          className="LandingBtnStart w-1/2 h-20 rounded-xl mt-14 RhodiumLibre text-3xl stroke text-white hover:bg-cyan-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
