// components/DefaultCTA.tsx
import Link from 'next/link';
import React from 'react';

const DefaultCTA = () => (
  <Link
    href="/book"
    aria-label="Explore our collection of books"
    className="mt-10 inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-8 rounded-full shadow-lg hover:scale-105 transition duration-500 ease-in-out animate-fade-in-delay"
  >
    Explore Books
  </Link>
);

export default DefaultCTA;
