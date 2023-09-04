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
    <nav className="bg-midnight-100 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Eavesdrop</div>
        <div className="md:flex md:items-center">
          {links.map(link => (
            <Link href={link.href} className="text-white py-2 px-4 hover:bg-midnight-200 rounded-md">{link.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

//export default Navbar;