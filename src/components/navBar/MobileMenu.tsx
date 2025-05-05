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
      className={`md:hidden absolute top-full left-0 w-full  text-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } origin-top`}
    >
      <nav className="bg-amber-700" aria-label="Mobile Navigation">
        <ul className="flex flex-col divide-amber-700">
          {NavBarItems.map(({ id, label, href }) =>
            (
              <li key={id}>
                <Link href={href} onClick={onClose} className={`block px-6 py-3 text-lg  ${id % 2 === 0 ? 'bg-amber-400 text-black hover:text-amber-200' : "bg-amber-00 tex-white hover:text-amber-300"}`}>
                  {label}
                  {/* {{id % 2 === 0 : " even" ? " odd"}} */}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
