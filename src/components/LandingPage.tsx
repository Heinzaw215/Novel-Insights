import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-warper relative">
        {/* Add a semi-transparent overlay for the vintage theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-900/80"></div>
        <div className="text-overlay relative p-6">
          <h1 className="text-5xl mb-5 font-extrabold tracking-tight text-white drop-shadow-lg leading-relaxed">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl mt-10 text-gray-200 max-w-lg text-center drop-shadow-md leading-loose">
            Dive into insightful reviews, uncover hidden gems, and explore the world of literature like never before.
          </p>
          <Link
            href="/books"
            className="mt-10 inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
          >
            Explore Books
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;