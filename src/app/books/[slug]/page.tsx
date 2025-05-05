'use client';

import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BookList } from '@/data/bookData';
import BookImage from '@/components/BookCard/BookImage';

const BookDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const book = useMemo(() => BookList.find((book) => book.slug === slug), [slug]);

  if (!book) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
        <p className="text-center text-red-600 text-xl font-semibold">📚 Book not found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2  bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-6">

        {/* Book Cover Image */}
        <div className="p-4 rounded-2xl max-w-full">
          <BookImage src={book.bookCover} alt={book.name} />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-center items-start max-w-2xl w-full">
          <article className="space-y-3 text-base sm:text-medium leading-relaxed">
            {/* Title, Price, Rating */}
            <div className="flex items-center p-2 bg-neutral-300 rounded-t-2xl">
              <h2 className="text-[1.8rem] font-extrabold text-gray-800 w-2/3 text-left">
                {book.name}
              </h2>
              <div className="w-1/3 text-right">
                <p className="text-[1.6rem] font-medium text-green-500">${book.price}</p>
                <p className="text-[1.2rem] font-medium text-yellow-800">⭐ {book.rating} / 5</p>
              </div>
            </div>

            {/* Genres */}
            <div className="bg-neutral-400 text-white font-semibold tracking-wider rounded-b-2xl p-2">
              <p>{book.genres.join(', ')}</p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 text-center gap-6">
              <div className="border bg-neutral-600 text-amber-50 rounded-xl p-3">
                <p className="text-amber-300 font-bold">Author</p>
                <p>{book.author}</p>
              </div>
              <div className="border bg-neutral-600 text-neutral-50 rounded-xl p-3">
                <p className="text-amber-300 font-semibold">Released Date</p>
                <p>{book.releasedDate}</p>
              </div>
            </div>

            {/* Description */}
            <div className="my-3 text-xl">
              <p>{book.description}</p>
            </div>
          </article>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full pt-6">
            {/* Back Button */}
            <button
              type="button"
              onClick={() => router.back()}
              className="py-3 px-6 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow transition duration-300"
            >
              ← Back to Library
            </button>

            {/* Discover Button */}
            <button
              type="button"
              onClick={() => router.push('/books')}
              className="py-3 px-6 bg-neutral-400 hover:bg-neutral-500 text-black font-semibold rounded-lg shadow transition duration-300"
            >
              📚 Discover More Books
            </button>
          </div>
        </div>
      </div>

      {/* Book Reviews */}
      {/* <div className="grid">
        <h2>Book Review (Reviews.length)</h2>
      </div> */}
    </main>
  );
};

export default BookDetailPage;
