"use client";
import React from "react";
import Link from "next/link";
import { PrimaryLinks } from "./PrimaryLinks";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { MobileMenu } from "./MobileMenu";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="bg-gradient-to-r from-amber-800 via-amber-900 to-amber-700 text-white shadow-2xl">
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Logo or Brand Name */}
        <Link
          href="/"
          className="text-5xl text-left font-bold tracking-wide hover:text-amber-300 transition-all duration-300 "
          title="Go to homepage"
        >
          Novel Insights
        </Link>

        {/* Primary Navigation Links */}
        <ul className="hidden md:flex gap-x-12 text-lg font-serif items-center justify-between">
          <PrimaryLinks />
        </ul>

        {/* Mobile Menu Toggle Button */}
        <MobileMenuToggle onClick={toggleMobile} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </nav>
  );
};

export default NavBar;
