import React, { useEffect, useState } from "react";
import { Menu } from "../icons";
import logo from "./../../assets/logo.svg";
import Form from "./Form";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [bg, setBg] = useState();
  window.addEventListener("scroll", () => setBg(window.scrollY));

  return (
    <header className={bg > 30 ? "header active z-10" : "header"}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="text-xl pt-1">
          <NavLink
            to="/latest"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 uppercase text-sm font-bold hover:text-[#e2d703] mr-4"
          >
            Latest
          </NavLink>

          <NavLink
            to="/now-playing"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 uppercase text-sm font-bold hover:text-[#e2d703] mr-4"
          >
            Now Playing
          </NavLink>
          <NavLink
            to="/popular"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 uppercase text-sm font-bold hover:text-[#e2d703] mr-4"
          >
            Popular
          </NavLink>
          <NavLink
            to="/top-rated"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 uppercase text-sm font-bold hover:text-[#e2d703] mr-4"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcomming"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 uppercase text-sm font-bold hover:text-[#e2d703] mr-4"
          >
            Upcoming
          </NavLink>
        </div>

        <Form />
        <Menu />

      </nav>
    </header>
  );
};

export default Header;
