import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed flex items-center justify-between top-0 w-full h-[10vh] px-4 md:px-20 py-2 bg-blue-500 z-50">
      {/* Logo */}
      <a
        href="#"
        className="logo flex justify-center items-center text-white text-xl md:text-2xl font-bold"
      >
        <img src={logo} className="h-8 md:h-10 w-auto mr-2" alt="QuiZZo Logo" />
        <span>QuiZZo</span>
      </a>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links (Desktop Only) */}
      <div className="md:flex hidden flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto">
        <a
          href="#"
          className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
        >
          About
        </a>
        <a
          href="#"
          className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
        >
          Contact
        </a>
      </div>

      {/* Links */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-blue-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:items-center md:w-auto md:bg-transparent`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 p-6 md:p-0 w-full md:w-auto">
          {/* Close Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-6 md:hidden"
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex md:hidden flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto">
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold py-2 md:py-0 text-center"
            >
              Contact
            </a>
          </div>

          {/* Authentication Links */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto mt-6 md:mt-0">
            <a
              href="#"
              className="text-white border border-white text-lg md:text-xl font-semibold py-2 md:py-1 rounded-full px-6 md:px-5 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="text-blue-500 bg-white text-lg md:text-xl font-semibold py-2 md:py-1 rounded-full px-6 md:px-5 text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
