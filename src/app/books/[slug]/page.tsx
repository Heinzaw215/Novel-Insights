'use client';

import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BooksData } from '@/data/bookData';
import BookImage from '@/components/BookCard/BookImage';
import BookCardTitleBox from '@/components/BookCard/BookCardTitleBox';
import BookCardContentBox from '@/components/BookCard/BookCardContentBox';
import BookReviewList from '@/components/BookCard/BookReviewList';

const BookDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const book = useMemo(() => BooksData.find((book) => book.slug === slug), [slug]);

  if (!book) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
        <p className="text-center text-red-600 text-xl font-semibold">📚 Book not found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 sm:p-8">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-2 bg-white shadow-2xl rounded-3xl max-w-5xl w-full">

        {/* Book Cover Image */}
        <section className="p-4 rounded-2xl">
          <BookImage src={book.bookCover} alt={book.name} />
        </section>

        {/* Book Details */}
        <section className="flex flex-col justify-between items-start p-4">
          {/* <article className="space-y-2 text-base sm:text-medium leading-relaxed"> */}
            <BookCardTitleBox book={book} />
            <BookCardContentBox book={book} />
            <p className="text-xl">{book.description}</p>
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Back to Library
            </button>
          {/* </article> */}
        </section>
        {/* Reviews */}
        <BookReviewList reviews={book.reviews} />
      </div>
    </main>
  );
};

export default BookDetailPage;