// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookInfoItem from './BookInfoItem';
// import BookList from './BookList';

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="bg-white border-black shadow-md rounded-lg p-3 max-w-sm mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={book.bookCover}
        alt={book.name || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-bold text-gray-800 text-center">{book.name}</h2>
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
        <BookInfoItem label="Rating" value={`${book.rating} / 5 ⭐`} />

        <BookInfoItem label="Price" value={`$${book.price}`} />

        <BookInfoItem
          label="Available"
          value={
            <span className={book.isAvailable ? 'text-green-600 text-xl' : 'text-red-600'}>
              {book.isAvailable ? 'Yes' : 'No'}
            </span>
          }
        />
      </div>
      <div className="flex justify-between">
        <Link href={`/book/${book.id}`} className="flex items-center justify-center w-1/2 p-2 me-2 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-l-full transition duration-300 hover:scale-105
        focus:border-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
          View Details
        </Link>
        <Link href={`/book/${book.id}/order`} className="flex items-center justify-center w-1/2 p-2 ms-2 bg-blue-600 hover:bg-blue-800 text-white  rounded-r-full transition duration-300 hover:scale-105 focus:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Order now
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
