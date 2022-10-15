import React from "react";

const Form = () => {
  return (
    <form className="sm:none">
      <div className="relative sm:hidden">
        <input
          type="text"
          className="bg-transparent border-2 border-gray-300 text-gray-50 text-sm rounded-lg  focus:border-[yellow] block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
          placeholder="Search"
        />

        <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default Form;
