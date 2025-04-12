"use client";
import React from "react";
import Link from "next/link";
import { PrimaryLinks } from "../NavBar/PrimaryLinks";
import MobileMenuToggle from "../NavBar/MobileMenuToggle";
import { MobileMenu } from "../NavBar/MobileMenu";
import ThemeToggle from "../misc/ThemeToggle";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="relative bg-gradient-to-r from-amber-800 via-amber-900 to-amber-700 text-white shadow-2xl">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-2 py-4">
        {/* Logo or Brand Name */}
        <Link
          href="/"
          className="text-4xl text-left font-bold tracking-wide hover:text-amber-300 transition-all duration-300"
          title="Go to homepage"
        >
          Novel Insights
        </Link>

        {/* Primary Navigation Links */}
        <ul className="hidden md:flex gap-x-6 text-xl font-serif">
          <ThemeToggle/>
          <PrimaryLinks />
        </ul>

        {/* Mobile Menu Toggle Button */}
        <MobileMenuToggle
          isOpen={mobileOpen}
          onClick={toggleMobile}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        id="mobile-menu"
        isOpen={mobileOpen}
        onClose={closeMobile}
        className={`transition-transform duration-300 ease-in-out transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      />
    </nav>
  );
};

export default NavBar;
