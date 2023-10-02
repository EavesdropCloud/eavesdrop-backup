"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import TempLogo from "./icons/TempLogo";

const links = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/account', label: 'Account'},
]

export default function Navbar() {
  return (
    <nav className="bg-raisin-100 border-b border-b-raisin-200 py-2 px-10">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="text-white font-extrabold text-2xl bg-clip-text md:flex md:justify-between md:items-center">
          <TempLogo className="w-10 h-10" />
          <Link className='focus:border-b-pinkman' href="/">Eavesdrop</Link>
        </div>
        <div className="md:flex md:items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white py-2 px-4 mx-5 opacity-50 transition duration-300 ease-in-out 
              bg-transparent hover:opacity-100 focus:opacity-100 focus:border-b focus:border-b-pinkman">{link.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}