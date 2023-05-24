import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";
import { useSelector } from "react-redux";
import ProfilePage from "./Pages/ProfilePage.jsx";

const AppRouter = () => {
  const token = useSelector((state) => state.auth.token);

  console.log(token);

  return (
    <>
      {token === "" ? (
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<ProfilePage />}></Route>
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
