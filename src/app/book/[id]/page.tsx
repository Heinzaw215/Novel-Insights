import React from 'react'
import { useParams } from 'next/navigation';
import { BookList } from '../db';

const BookDetailPage = () => {
  const {id} = useParams();
  const book = BookList.find((book) => book.id === Number(id));

  if (!book) {
    return <p className='text-center text-red-500'>Book not found</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">{book.name}</h1>
      <img
        src={book.bookcover}
        alt={book.name}
        className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg mb-6"
      />
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-bold">Author:</span> {book.author}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-bold">Released Date:</span> {book.releasedDate}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-bold">Categories:</span> {book.catagories.join(', ')}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-bold">Description:</span> {book.description}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-bold">Rating:</span> {book.rating} / 5
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold">Available:</span> {book.isAvailable ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  )
}

export default BookDetailPage