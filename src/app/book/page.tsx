"use client";
// components/MainBookPage.tsx
import useLoading from '@/hooks/isLoading';
import LoadingSpinner from './loading';
import BookList from '@/components/BookCard/BookList';
import { BookList as booksFromDB } from './db';

const MainBookPage = () => {
  const isLoading = useLoading(1000);

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
      <BookList books={booksFromDB} />
    </div>
  );
};

export default MainBookPage;