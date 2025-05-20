"use client";

import React from 'react';
import useLoading from '@/hooks/isLoading';
import { BooksData } from '@/data/bookData';
import { LoadingSpinner } from '@/components/misc';
import dynamic from 'next/dynamic';
// import BookFilter from '@/components/BookCard/BookFilter';

const BookList = dynamic(() => import("@/components/BookCard/BookList"), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const SectionHeader = dynamic(() => import('@/components/SectionHeader'), {
  loading: () => <div className="text-yellow-300">Loading header...</div>,
  ssr: false,
});

const MainBookPage = () => {
  const isLoading = useLoading(1000);

  // Ensure that booksFromDB is valid before calling map
  // const books = useMemo(() => {
  //   if (booksFromDB && Array.isArray(booksFromDB)) {
  //     return booksFromDB.map(book => ({
  //       ...book,
  //       releasedDate: book.releasedDate.toString()
  //     }));
  //   }
  //   return []; // Return an empty array if booksFromDB is not valid
  // }, []);

  // const [filteredBooks, setFilteredBooks] = useState(books);

  // const handleFilter = (criteria: { genre?: string; available?: boolean }) => {
  //   let filtered = books;

  //   if (criteria.genre) {
  //     filtered = filtered.filter(book =>
  //       book.categories.includes(criteria.genre)
  //     );
  //   }

  //   if (criteria.available !== undefined) {
  //     filtered = filtered.filter(book => book.isAvailable === criteria.available);
  //   }

  //   setFilteredBooks(filtered);
  // };

  if (isLoading) {
    return <LoadingSpinner size={50} />;
  }

  return (
    <section className="flex flex-col relative items-center min-h-screen pb-6 bg-gradient-to-b from-amber-800 to-amber-700">
      <div className="relative z-10 text-center p-4 w-full mx-auto">
        <SectionHeader
          title='Explore Our Book Collection'
          titleStyle='text-6xl font-semibold md:font-bold lg:font-extrabold text-yellow-400'
          subtitle='Discover your next favorite book from our curated collection.
          Browse through genres, authors, and more.'
          subtitleStyle='text-xl text-yellow-200 font-medium md:font-bold lg:font-extrabold mt-4 mb-8 max-w-2xl mx-auto'
        />
        {/* <BookFilter
          onFilter={handleFilter}
          categories={allCategories}
        /> */}
        <BookList books={BooksData} />
      </div>
    </section >
  );
};

export default MainBookPage;
