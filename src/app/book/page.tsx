"use client";
// components/MainBookPage.tsx
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/BookCard/LoadingSpinner';
import BookList from '../../components/BookCard/BookList';
import { BookList as books } from './db';

const MainBookPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-5xl font-extrabold mt-16 mb-6 text-gray-800 text-center">
        Explore Our Book Collection
      </h1>
      <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl px-4">
        Discover your next favorite book from our curated collection. Browse through genres, authors, and more.
      </p>
      <BookList books={books} />
    </div>
  );
};

export default MainBookPage;
