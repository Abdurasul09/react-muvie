import React from "react";
import { Menu } from "../icons";
import logo from "./../../assets/logo.svg";
import Form from "./Form";

const Header = () => {
  return (
    <div className="h-24 flex items-center fixed t-0 l-0 r-0 w-full">
      <div className="container mx-auto px-9">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a>
            </div>
          </div>
          <Form />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
