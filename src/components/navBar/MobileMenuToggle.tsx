import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons

interface MobileMenuToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean; // Indicates if the mobile menu is open or closed
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      className="md:hidden text-3xl focus:outline-none"
      onClick={onClick} // Function to toggle the mobile menu
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      title={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <FaTimes className="text-white" />
      ) : (
        <FaBars className="text-white" />
      )}
    </button>
  );
};

export default MobileMenuToggle;
