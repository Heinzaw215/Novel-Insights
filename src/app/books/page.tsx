"use client";

import React, { useMemo } from 'react';
import useLoading from '@/hooks/isLoading';
import LoadingSpinner from './loading';
import BookList from '@/components/BookCard/BookList';
import { BookList as booksFromDB } from '@/data/bookData';
import GradientOverlay from '@/components/misc/GradientOverlay';
import SectionHeader from '@/components/SectionHeader';
// import { GenreTag } from '@/components/ReviewsCard';

const MainBookPage = () => {
  const isLoading = useLoading(1000);

  // Convert release date strings just once for performance
  const books = useMemo(() => (
    booksFromDB.map(book => ({
      ...book,
      releasedDate: book.releasedDate.toString()
    }))
  ), []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="flex flex-col relative items-center min-h-screen pb-6 bg-gradient-to-b from-amber-800 to-amber-700">
      <GradientOverlay
        as="div"
        className="bg-gradient-to-b"
        direction="to-l"
        from="from-amber-800/50"
        via="via-transparent"
        to="to-amber-700/80"
        zIndex="z-0"
      />

      <div className="relative z-10 text-center p-4 w-full mx-auto">
        <SectionHeader
          title='Explore Our Book Collection'
          titleStyle='text-6xl font-semibold md:font-bold lg:font-extrabold text-yellow-400'
          subtitle='Discover your next favorite book from our curated collection.
          Browse through genres, authors, and more.'
          subtitleStyle='text-xl text-yellow-200 font-medium md:font-bold lg:font-extrabold mt-4 mb-8 max-w-2xl mx-auto'
        />

        <BookList books={books}/>
      </div>
    </section>
  );
};

export default MainBookPage;
