// components/BookList.tsx
import { Book } from '@/types/book';
import BookCard from './BookCard';

type BookListProps = {
  books: Book[];
  limit?: number;
};

const BookList = ({ books, limit }: BookListProps) => {
  const bookToShow = limit ? books.slice(0, limit) : books;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {bookToShow.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
