import React from "react";
import Link from "next/link";
import { NavBarItems } from "@/config/navBarConfig";

export const PrimaryLinks = () => {
  return (
    <>
      {NavBarItems.map(({id, label, link }) => (
        <li key={id}>
          <Link
            href={link}
            className="hover:text-amber-300 transition duration-300"
            title={label}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};
