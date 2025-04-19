// components/Login/ThemeToggleButton.tsx
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-auto block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}