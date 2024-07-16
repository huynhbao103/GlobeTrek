// Header.js
import React, { useState, useEffect } from "react";
import Traveloka from "../assets/Logo1.png";

import UserInfo from "./UserInfo";
import Login from "./Login";

const Header = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setToken(userData.token);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
  };

  return (
    <header className="fixed top-0 z-50 w-full  shadow-md  items-center  p-2 bg-white">
      {/* Logo/Image */}
      <div className=" flex items-center justify-center ">
        {/* Login/Register */}

        <div className="text-center">{user ? <UserInfo /> : <Login />}</div>

        <div className="flex">
          <img src={Traveloka} alt="Logo" className=" w-[100px]" />
        </div>

        {/* Menu */}
        <div className="pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
