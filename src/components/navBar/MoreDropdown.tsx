import React from "react";
import Link from "next/link";

interface MoreDropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MoreDropdown: React.FC<MoreDropdownProps> = ({ isOpen, toggle }) => {
  const secondaryNavBarItems = [
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
    { id: 6, name: "Login", href: "/login" },
  ];

  return (
    <li className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
        className="hover:text-amber-300 transition duration-300 focus:outline-none"
        title="More links"
      >
        More
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-amber-800 text-white shadow-lg rounded-lg overflow-hidden transition-all duration-300">
          {secondaryNavBarItems.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="block px-4 py-3 hover:bg-amber-700 transition duration-300"
                title={name}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
