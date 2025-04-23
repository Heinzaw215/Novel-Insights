import React, { MouseEventHandler } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MobileMenuToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  iconSize?: string;
  iconColor?: string;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = React.memo(
  ({ isOpen, onClick, className = '', iconSize = 'text-3xl', iconColor = 'text-white', ...props }) => {
    return (
      <button
        type="button"
        className={`md:hidden focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-offset-2 focus:ring-offset-amber-200 rounded-md p-2 bg-amber-600 hover:bg-amber-700 transition duration-200 ease-in-out ${className}`}
        onClick={onClick}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        title={isOpen ? "Close menu" : "Open menu"}
        {...props}
      >
        <span
          className={`transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <FaTimes className={`${iconColor} ${iconSize}`} />
          ) : (
            <FaBars className={`${iconColor} ${iconSize}`} />
          )}
        </span>
      </button>
    );
  }
);

// Set the display name for easier debugging
MobileMenuToggle.displayName = "MobileMenuToggle";

export default MobileMenuToggle;
