import React from "react";
import Link from "next/link";

export const PrimaryLinks = () => {
  const primaryNavBarItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Books", href: "/books" },
    { id: 3, name: "Reviews", href: "/reviews" },
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
    { id: 6, name: "Login", href: "/login" },
  ];

  return (
    <>
      {primaryNavBarItems.map(({ id, name, href }) => (
        <li key={id}>
          <Link
            href={href}
            className="hover:text-amber-300 transition duration-300"
            title={name}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};
