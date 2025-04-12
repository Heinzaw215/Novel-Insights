import Link from "next/link";
import React, { RefObject } from "react";

interface MenuItem {
  id: number;
  name: string;
  href: string;
}

interface MobileMenuListProps {
  items: MenuItem[];
  onClose: () => void;
  firstRef: RefObject<HTMLAnchorElement>;
  lastRef: RefObject<HTMLAnchorElement>;
}

export const MobileMenuList: React.FC<MobileMenuListProps> = ({
  items,
  onClose,
  firstRef,
  lastRef,
}) => {
  return (
    <ul
      className="md:hidden bg-amber-800 text-white py-4 px-6 space-y-5 text-xl font-medium fixed inset-0 z-20 transform transition-transform duration-300 ease-in-out"
      aria-label="Mobile navigation"
      role="menu"
    >
      {items.map(({ id, name, href }) => (
        <li key={id} role="menuitem">
          <Link
            href={href}
            onClick={onClose}
            className="block hover:text-amber-300 transition duration-300"
            title={name}
            ref={
              id === 1
                ? firstRef
                : id === items.length
                ? lastRef
                : null
            }
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
