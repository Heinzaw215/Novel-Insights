// components/BookList.tsx
import BookCard from './BookCard';

type Book = {
  id: number;
  name: string;
  author: string;
  releasedDate: string;
  categories: string[];
  description: string;
  rating: number;
  isAvailable: boolean;
  bookCover: string;
};

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
