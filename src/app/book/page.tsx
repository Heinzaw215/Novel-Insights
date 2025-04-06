import React from 'react';
import Image from 'next/image';
import { BookList } from './db';

const MainBookPage = () => {
  return (
    <div className="flex-center flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-5xl font-extrabold mt-16 mb-6 text-gray-800 text-center ">
        Explore Our Book Collection
      </h1>
      <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl">
        Discover your next favorite book from our curated collection. Browse through genres, authors, and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {BookList.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <Image
              src={book.bookcover}
              alt={book.name}
              width={200}
              height={300}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">{book.name}</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-bold">Author:</span> {book.author}
              </p>
              <p>
                <span className="font-bold">Released Date:</span> {book.releasedDate}
              </p>
              <p>
                <span className="font-bold">Categories:</span> {book.catagories.join(', ')}
              </p>
              <p>
                <span className="font-bold">Description:</span> {book.description}
              </p>
              <p>
                <span className="font-bold">Rating:</span> {book.rating} / 5
              </p>
              <p>
                <span className="font-bold">Available:</span> {book.isAvailable ? 'Yes' : 'No'}
              </p>
            </div>
            <button className="mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBookPage;