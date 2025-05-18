import React from "react";

interface LoadingSpinnerProps {
  text?: string;
  size?: number; // size in pixels
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
  size = 64,
  className = "",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div
        className={`relative`}
        style={{ width: size, height: size }}
      >
        <div
          className={`absolute inset-0 rounded-full border-4 border-t-transparent animate-spin 
          border-gradient border-gradient-to-tr from-amber-400 via-orange-500 to-red-500 ${className}`}
        ></div>
        <div className="absolute inset-2 rounded-full bg-amber-50 dark:bg-zinc-900"></div>
      </div>
      <p className="text-xl font-medium text-zinc-600 dark:text-zinc-300 animate-pulse">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
