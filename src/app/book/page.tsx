"use client";
// components/MainBookPage.tsx
import useLoading from '@/hooks/isLoading';
import LoadingSpinner from './loading';
import BookList from '@/components/BookCard/BookList';
import { BookList as booksFromDB } from '@/database/bookData';

const MainBookPage = () => {
  const isLoading = useLoading(1000);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-6 bg-gradient-to-b from-amber-800 to-amber-700">
      <h1 className="text-5xl font-semibold md:font-bold lg:font-extrabold mt-9 text-yellow-400 text-center">
        Explore Our Book Collection
      </h1>
      <p className="text-xl text-yellow-200 font-medium md:font-bold  lg:font-extrabold  mt-4 mb-8 text-center max-w-2xl px-4">
        Discover your next favorite book from our curated collection. <br />
        Browse through genres, authors, and more.
      </p>
      <BookList books={booksFromDB.map(book => ({
        ...book,
        releasedDate: book.releasedDate.toString()
      }))} />
    </div>
  );
};

export default MainBookPage;