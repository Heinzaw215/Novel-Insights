// MobileMenuToggle.tsx
import React from "react";

interface MobileMenuToggleProps {
  onClick: () => void;
}

export const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden text-3xl focus:outline-none"
      aria-label="Toggle mobile menu"
      title="Toggle menu"
    >
      ☰
    </button>
  );
};

export default MobileMenuToggle;
