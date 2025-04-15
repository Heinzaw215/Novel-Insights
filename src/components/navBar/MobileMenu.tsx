import React from "react";
import { NavBarItems } from "@/config/navBarConfig";
import Link from "next/link";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  className?:string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ id, isOpen, onClose }) => {
  return (
    <div
      id={id}
      className={`md:hidden absolute top-full left-0 w-full bg-amber-800 text-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } origin-top`}
      aria-hidden={!isOpen} // Hide from screen readers when closed
    >
      <nav aria-label="Mobile Navigation">
        <ul className="flex flex-col divide-y divide-amber-700 px-6 py-4">
          {NavBarItems.map(({ id, label, href }) =>
            href ? (
              <li key={id}>
                <Link href={href} onClick={onClose} className="block py-3 text-lg hover:text-amber-300">
                  {label}
                </Link>
              </li>
            ) : (
              <li key={id}>
                <span className="block py-3 text-lg text-gray-500">{label}</span>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
