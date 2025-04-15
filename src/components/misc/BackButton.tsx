"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"; // Optional icon
import React, { useEffect, useState } from "react";

interface BackButtonProps {
  label?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label = "Back", className = "" }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationOut, setIsAnimationOut] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Handle back navigation with animation out
  const handleClick = () => {
    setIsAnimationOut(true); // Trigger exit animation
    // After animation, go back to the previous page
    setTimeout(() => {
      router.back();
    }, 300); // Match the transition duration here (300ms)
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        inline-block px-4 py-2 border border-amber-600 rounded-full text-amber-700 bg-amber-400 hover:bg-amber-100 transition-all duration-500 ease-out
        transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
        ${isAnimationOut ? "translate-x-10 opacity-0" : ""}
        ${className}
      `}
      aria-label="Go back"
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
