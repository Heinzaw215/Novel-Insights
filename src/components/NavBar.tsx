"use client";
import Link from "next/link";
import React, { useState } from "react";

interface NavBarItem {
  id: number;
  name: string;
  href: string;
}

const primaryNavBarItems: NavBarItem[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Books", href: "/books" },
  { id: 3, name: "Reviews", href: "/reviews" },
];

const secondaryNavBarItems: NavBarItem[] = [
  { id: 4, name: "About", href: "/about" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "Login", href: "/login" },
];

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          Novel Insights
        </Link>

        {/* Primary Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {primaryNavBarItems.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="hover:text-amber-300 transition duration-300"
              >
                {name}
              </Link>
            </li>
          ))}

          {/* Dropdown Menu for Secondary Links */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-amber-300 transition duration-300"
            >
              More
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-amber-800 text-white shadow-lg rounded-lg py-2 w-40">
                {secondaryNavBarItems.map(({ id, name, href }) => (
                  <li
                    key={id}
                    className="px-4 py-2 hover:bg-amber-700 transition duration-300"
                  >
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownOpen && (
        <ul className="md:hidden bg-amber-800 text-white py-4 px-6 space-y-4">
          {primaryNavBarItems.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="block hover:text-amber-300 transition duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
          <hr className="border-amber-700" />
          {secondaryNavBarItems.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="block hover:text-amber-300 transition duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;