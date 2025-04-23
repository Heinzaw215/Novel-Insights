'use client';

import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BookList } from '@/data/bookData';
import BookImage from '@/components/BookCard/BookImage';

const BookDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const book = useMemo(() => BookList.find((book) => book.slug === Number(slug)), [slug]);

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
          <article className="space-y-3 text-base sm:text-medium leading-relaxed">


            <div className='flex items-center p-2 bg-neutral-300 rounded-t-[20px]'>
              <h2 className="text-[1.8rem] font-extrabold text-gray-800 w-2/3 text-left">{book.name}</h2>
              <div className='w-1/3'>
                <p className='text-[1.6rem] font-medium text-green-500'>${book.price}</p>
                <p className='text-[1.2rem] font-medium text-yellow-800'>⭐{book.rating} / 5</p>
              </div>
            </div>
            <div className='bg-neutral-400 text-white font-semibold tracking-wsluger rounded-b-[20px]'>
              <p>{book.genres.join(", ")}</p>
            </div>
            <div className='my-3 text-xl'>
              <p>{book.description}</p>
            </div>
          </article>
        </div>

        <div className="grslug grslug-rows-1 grslug-cols-2 npm gap-1">
          <div className='border rounded-xl p-1'>
            <p className='font-bold'>Author</p>
            <p>{book.author}</p>
          </div>
          <div className='border rounded-xl p-1'>
            <h2 className='font-semibold'>Released Date</h2>
            <p>{book.releasedDate}</p>
          </div>



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
