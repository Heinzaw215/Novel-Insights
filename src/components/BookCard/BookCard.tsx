// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookInfoItem from '../BookInfoItem';

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

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 font-serif max-w-sm mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={book.bookCover}
        alt={book.name}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-md mb-4"
        loading="lazy"
        placeholder="blur"
        blurDataURL={book.bookCover} // Optional: Low-quality image placeholder
      />
      <h2 className="text-xl font-serif font-bold mb-4 text-gray-800 text-center">{book.name}</h2>
      <div className="{grid grid-cols-2 gap-x-4 gap-y-2} text-gray-600">
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
        <BookInfoItem label="Available" value={book.isAvailable ? '✅ Yes' : '❌ No'}></BookInfoItem >
      </div>
      <div className="flex align-middle">
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-l-full transition duration-300 hover:scale-105 flex items-center justify-center">
          View Details
        </Link>
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border border-black rounded-r-full transition duration-300 hover:scale-105 flex items-center justify-center">
          Order now
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
