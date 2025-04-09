'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { BookList } from '../db';
import BookInfoItem from '@/components/BookInfoItem';
import BookImage from '@/components/BookImage';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = BookList.find((book) => book.id === Number(id));

  if (!book) {
    return <p className="text-center text-red-500 mt-10 text-xl">Book not found</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">{book.name}</h1>
      
      <BookImage src={book.bookcover} alt={book.name} />

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full space-y-4">
        <BookInfoItem label="Author" value={book.author} />
        <BookInfoItem label="Released Date" value={book.releasedDate.toString()} />
        <BookInfoItem label="Categories" value={book.catagories.join(', ')} />
        <BookInfoItem label="Description" value={book.description} />
        <BookInfoItem label="Rating" value={`${book.rating} / 5`} />
        <BookInfoItem label="Available" value={book.isAvailable ? 'Yes' : 'No'} />
      </div>
    </div>
  );
};

export default BookDetailPage;
