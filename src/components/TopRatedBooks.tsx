import { Book } from '@/schemas/book'
import React from 'react'
import BookCard from './BookCard/BookCard';

type TopRatedBooksProps = {
  books: Book[];
};

const TopRatedBooks: React.FC<TopRatedBooksProps> = ({ books }) => {
  const topRatedBooks = books.filter((book) => book.rating >= 4.5).sort((a, b) => b.rating - a.rating).slice(0, 3);

  if (topRatedBooks.length === 0) {
    return (
      <p>No top rated books found.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {topRatedBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
      <p>See More</p>
    </div>
  );
}

export default TopRatedBooks