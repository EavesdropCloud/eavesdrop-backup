"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const links = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/account', label: 'Account'},
]

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-midnight-50 from-2% to-midnight-100 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg font-semibold 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500 animate-text">Eavesdrop</div>
        <div className="md:flex md:items-center">
          {links.map(link => (
            <Link href={link.href} className="text-white py-2 px-4 mx-5 opacity-50 transition duration-300 ease-in-out 
              bg-transparent hover:opacity-100 focus:opacity-100 focus:border-b-2 focus:border-b-lilac">{link.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

//export default Navbar;
