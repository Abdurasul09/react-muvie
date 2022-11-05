import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();

  console.log(searchTitle);

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search-movie/:${searchTitle}`);
  };

  return (
    <form className="sm:none">
      <div className="flex items-center">
        <input
          onChange={handleChange}
          type="text"
          className="bg-transparent border-2 border-gray-300 text-gray-50 text-sm rounded-lg  focus:border-[yellow] block w-56 mr-2 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
          placeholder="Search"
        />

        <button
          onClick={handleSearch}
          className="bg-gray-600 focus:border-[yellow]  cursor-pointer  px-4 py-2 border-2 rounded-lg border-gray-300"
        >
          <AiOutlineSearch className="text-xl text-gray-200" />
        </button>
      </div>
    </form>
  );
};

export default Form;
