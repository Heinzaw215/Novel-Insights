"use client";

import React from 'react';
import useLoading from '@/hooks/isLoading';
import { BooksData } from '@/data/bookData';
import { LoadingSpinner } from '@/components/misc';
import dynamic from 'next/dynamic';

const BookList = dynamic(() => import("@/components/BookCard/BookList"), {
  loading: () => <span />,
  ssr: false
});

const SectionHeader = dynamic(() => import('@/components/SectionHeader'), {
  loading: () => <span />,
  ssr: false,
});

const MainBookPage = () => {
  const isLoading = useLoading(1000);
  
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
        <BookList books={BooksData} />
      </div>
    </section>
  );
};

export default MainBookPage;
