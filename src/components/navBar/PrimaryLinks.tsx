"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarItems } from "@/config/navBarConfig";

export const PrimaryLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {NavBarItems.map(({ id, label, href }) => {
        const isActive = pathname === href || (pathname === '/' && href === '/');

        return (
          <li key={id}>
            <Link
              href={href}
              className={`transition duration-300 px-2 py-1 border-b-2 text-2xl hover:font-semibold ${
                isActive
                  ? "text-orange-600 font-bold border-orange-600"
                  : "hover:text-orange-800 border-transparent"
              }`}
              title={`Go to ${label} Page`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </>
  );
};
