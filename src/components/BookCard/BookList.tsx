import React, { Suspense, memo } from 'react';
import { Book } from '@/schemas/book';
import BookCard from './BookCard';

type BookListProps = {
  books: Book[];
  limit?: number;
};

const BookList = memo(({ books, limit }: BookListProps) => {
  const bookToShow = limit ? books.slice(0, limit) : books;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <Suspense fallback={<span />}>
        {bookToShow.map((book) => (
          <BookCard key={book.bookID} book={book} />
        ))}
      </Suspense>
    </div>
  );
});


// Set display name explicitly to avoid ESLint warning
BookList.displayName = "BookList"

export default BookList;
