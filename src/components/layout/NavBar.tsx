"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PrimaryLinks, MobileMenu, MobileMenuToggle } from "../NavBar";
import { motion } from "framer-motion";
import { NavBarConfig } from '@/config/navBarConfig';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      className="sticky bg-amber-500 text-black shadow-2xl dark:text-black dark:bg-amber-400 dark:shadow-none"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        {/* Logo or Brand Name */}
        <Link
          href="/"
          className="text-4xl uppercase font-bold hover:text-orange-500 transition-all duration-300"
          title="Go to homepage"
        >
          {NavBarConfig.pageName}
        </Link>

        {/* Primary Navigation Links */}
        <ul className="hidden md:flex gap-x-8 text-[20px] text-black transition-colors duration-300">
          <PrimaryLinks />
        </ul>

        {/* Mobile Menu Toggle Button */}
        <MobileMenuToggle
          isOpen={mobileOpen}
          onClick={toggleMobile}
          aria-expanded={mobileOpen ? "true" : "false"}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        id="mobile-menu"
        isOpen={mobileOpen}
        onClose={closeMobile}
        className={`transition-all duration-300 ease-in-out transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      />
    </motion.header>
  );
};

// Memoizing NavBar for performance optimization
export default React.memo(NavBar);
