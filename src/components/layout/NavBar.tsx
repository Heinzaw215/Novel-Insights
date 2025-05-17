"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { PrimaryLinks, MobileMenu, MobileMenuToggle } from "@/components/NavBar";
import { motion } from "framer-motion";
import { NavBarConfig } from '@/config/navBarConfig';
import { useEscapeToClose } from "@/hooks/useEscapeToClose";
import { useReturnFocus } from "@/hooks/useReturnFocus";


const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLElement>(null);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  // Close Menu when Escape key Pressed
  useEscapeToClose(closeMobile, mobileOpen);

  // Return focus to toggle button when menu closes
  useReturnFocus(mobileOpen, toggleButtonRef);
  return (
    <motion.header
      className="relative bg-amber-500 text-black shadow-2xl dark:text-black dark:bg-amber-400 dark:shadow-none"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        {/* Logo or Brand Name */}
        <Link
          href="/"
          className="text-4xl uppercase font-bold hover:text-orange-500
          transition-all duration-300"
          title="Go to Homepage"
          aria-label="Go to HomePage"
        >
          {NavBarConfig.pageName}
        </Link>

        {/* Primary Navigation Links */}
        <ul className="hidden md:flex gap-x-4 font-medium  text-xl text-black transition-colors duration-300">
          <PrimaryLinks />
        </ul>

        {/* Mobile Menu Toggle Button */}
        <MobileMenuToggle
          ref={toggleButtonRef}
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
        className={`${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
      />
    </motion.header>
  );
};

// Memoizing NavBar for performance optimization
export default NavBar;
