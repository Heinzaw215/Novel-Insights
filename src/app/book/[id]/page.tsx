'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BookList } from '@/data/bookData';
import BookInfoItem from '@/components/BookCard/BookInfoItem';
import BookImage from '@/components/BookCard/BookImage';

const BookDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const book = BookList.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
        <p className="text-center text-red-600 text-xl font-semibold">
          📚 Book not found
        </p>
      </main>
    );
  }

  return (
    <main className="items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-10 bg-white shadow-2xl rounded-3xl max-w-5xl ">
        <div className="h-auto bg-amber-200">
          <BookImage src={book.bookCover} alt={book.name} />
        </div>
        <div className="flex flex-col justify-center items-start p-6 sm:p-10 space-y-5 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-amber-800 text-center drop-shadow-md leading-tight">
            {book.name}
          </h1>

          <article className="space-y-3 text-base sm:text-medium leading-relaxed">
            <BookInfoItem label="Author" value={<span className='whitespace-pre-line'>{book.author}</span>} />
            <BookInfoItem label="Released Date" value={
              <span className='whitespace-pre-line'>
                {book.releasedDate.toString()}
              </span>
            } />
            <BookInfoItem label="Categories" value={book.categories.join(', ')} />
            <BookInfoItem
              label="Description"
              value={
                <span className="max-h-60 overflow-y-auto pr-1 whitespace-pre-line">
                  {book.description}
                </span>
              }
            />
            <BookInfoItem label="Rating" value={`${book.rating} / 5`} />

            <BookInfoItem label="Available" value={book.isAvailable ? 'Yes' : 'No'} className='{book.isAvailable ? text-green-400 : text-red-400}'></BookInfoItem >

          </article>

          <div className="flex justify-center flex-wrap">
            <button type='button'
              onClick={() => router.back()}
              className="py-4 px-10 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white font-semibold  rounded-l-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              Back to Library
            </button>
            <button
              onClick={() => router.push('/books')}
              className="py-4 px-10 text-white font-semibold shadow-lg rounded-r-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 hover:scale-110 transform transition-transform duration-300"
            >
              Discover more books
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailPage;
