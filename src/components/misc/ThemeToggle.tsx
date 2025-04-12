// components/misc/ThemeToggle.tsx
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-400 dark:border-gray-600 transition hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-blue-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
