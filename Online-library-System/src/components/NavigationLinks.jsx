import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  const [navBar, setNavBar] = useState(false);

  // Toggle handler for a responsive nav bar
  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-600 relative text-white flex items-center px-6 py-4 shadow-lg">
      <div className="flex justify-between w-full sm:justify-start items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/home" className="hover:text-black transition">
            MyLibrary
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className={`text-3xl cursor-pointer sm:hidden focus:outline-none ${
            navBar ? "text-black" : "text-white"
          } hover:text-black transition`}
          onClick={toggleNavBar}
          aria-label="Toggle navigation menu"
        >
          {navBar ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          navBar ? "block" : "hidden"
        } absolute top-14 right-0 bg-white text-blue-800 rounded-md shadow-lg w-48 px-4 py-6 space-y-4 sm:static sm:flex sm:items-center sm:space-x-8 sm:space-y-0 sm:bg-transparent sm:text-white sm:rounded-none sm:shadow-none sm:w-auto sm:p-0 transition-all`}
      >
        <li>
          <Link
            to={`/home`}
            className="hover:underline hover:text-black transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={`/browse-books`}
            className="hover:underline hover:text-black transition duration-300"
          >
            Browse Books
          </Link>
        </li>
        <li>
          <Link
            to={`/add-book`}
            className="hover:underline hover:text-black transition duration-300"
          >
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
