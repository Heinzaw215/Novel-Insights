// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookInfoItem from './BookInfoItem';
import BookList from './BookList';

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="bg-white border-black shadow-md rounded-lg p-3 font-serif max-w-sm mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={book.bookCover}
        alt={book.name || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-serif font-bold mb-2 text-gray-800 text-center">{book.name}</h2>
      <div className="text-gray-600">
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
            <span className="line-clamp-3 whitespace-pre-line">
              {book.description}
            </span>
          }
        />
        <BookInfoItem label="Rating" value={`${book.rating} / 5`} />

        <BookInfoItem label="Price" value={`$${book.price}`} />

        <BookInfoItem
          label="Available"
          value={
            <span className={book.isAvailable ? 'text-green-600' : 'text-red-600'}>
              {book.isAvailable ? 'Yes' : 'No'}
            </span>
          }
        />
      </div>
      <div className="flex align-middle">
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-l-full transition duration-300 hover:scale-105 flex items-center justify-center">
          View Details
        </Link>
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border border-black rounded-r-full transition duration-300 hover:scale-105 flex items-center justify-center">
          Order now
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
