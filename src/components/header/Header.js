import React, { useEffect, useState } from "react";
import { Menu } from "../icons";
import logo from "./../../assets/logo.svg";
import Form from "./Form";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [bg, setBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header className={bg ? "header active" : "header"}>
      <nav className="flex items-center justify-between flex-wrap fixed t-0 l-0 r-0 w-full bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-xl pt-1 lg:flex-grow">
            <NavLink
              to="/latest"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Latest
            </NavLink>
            <NavLink
              to="/now-playing"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Now Playing
            </NavLink>
            <NavLink
              to="/popular"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Popular
            </NavLink>
            <NavLink
              to="/top-rated"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/upcomming"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Upcoming
            </NavLink>
          </div>
          <Form />
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
