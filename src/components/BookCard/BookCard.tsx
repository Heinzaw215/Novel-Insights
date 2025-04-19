// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookInfoItem from './BookInfoItem';
// import { GenreTag } from '../ReviewsCard';
import { Book } from '@/types/book';

const BookCard = ({ id, bookCover, name, author, releasedDate, categories, description, rating, price, isAvailable }: Book) => {
  return (
    <article className="bg-white border-black shadow-md rounded-lg p-3 max-w-sm mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={bookCover}
        alt={name || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-bold text-gray-800 text-center">{name}</h2>
      <div className="text-gray-600">
        <BookInfoItem label="Author" value={<span className='whitespace-pre-line'>{author}</span>} />

        <BookInfoItem label="Released Date" value={
          <span className='whitespace-pre-line'>
            {releasedDate.toString()}
          </span>
        } />

        {/* <div className="flex flex-wrap gap-2">
          {genres.map((genre, idx) => <GenreTag key={idx} label={genre} />)}
        </div> */}

        <BookInfoItem label="Categories" value={categories.join(', ')} />

        <BookInfoItem
          label="Description"
          value={
            <span className="line-clamp-3 whitespace-pre-line">
              {description}
            </span>
          }
        />
        <BookInfoItem label="Rating" value={`${rating} / 5 ⭐`} />

        <BookInfoItem label="Price" value={`$${price}`} />

        <BookInfoItem
          label="Available"
          value={
            <span className={isAvailable ? 'text-green-600 text-xl' : 'text-red-600'}>
              {isAvailable ? 'Yes' : 'No'}
            </span>
          }
        />
      </div>
      <div className="flex justify-between">
        <Link href={`/books/${id}`} className="flex items-center justify-center w-1/2 p-2 me-2 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-l-full transition duration-300 hover:scale-105
        focus:border-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
          View Details
        </Link>
        <Link href={`/books/${id}/order`} className="flex items-center justify-center w-1/2 p-2 ms-2 bg-blue-600 hover:bg-blue-800 text-white  rounded-r-full transition duration-300 hover:scale-105 focus:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Order now
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
