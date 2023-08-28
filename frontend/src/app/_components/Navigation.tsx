"use client"

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Eavesdrop</div>
        <button
          className="text-white text-lg md:hidden"
          onClick={toggleNavbar}
        >
          Menu
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
        >
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-blue-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-blue-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-blue-700"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
