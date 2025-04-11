'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out ring-1 ring-yellow-200 hover:scale-105 z-50"
    >
      <FaArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
