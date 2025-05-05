// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from "framer-motion"
import { Book } from '@/types/book';
// import { GenreTag } from '../ReviewsCard';

const MotionLink = motion.create(Link);

const BookCard = ({ book }: { book: Book }) => {
  const { name, bookCover, author, releasedDate, genres, description, rating, price, slug } = book;
  return (
    <article className="bg-white border-black rounded-xl p-3 max-w-md mx-auto shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl
    hover:ring-3 hover:ring-gray-300 hover:bg-neutral-100">

      {/* BookCard Image */}
      <Image
        src={bookCover}
        alt={name || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-[20px] mb-2"
        loading="lazy"
      />

      {/* BookCard Title and Price */}
      <div className='flex items-center gap-x-2 p-2 bg-neutral-300 rounded-t-[20px]'>
        {/* BookCard Title */}
        <h2 className={`font-extrabold italic text-gray-800 w-2/3 text-left line-clamp-3 ${(name?.length ?? 0) > 20 ? "text-[1.25rem]" : "text-[2rem]"}`}>{name}</h2>

        {/* BookCard Price and Rating */}
        <div className='w-1/3 font-mono text-center'>
          {/* Price Display */}
          <p className='text-[1.75rem] font-medium'>
            ${price}
          </p>

          {/* Rating Display */}
          <div className='flex items-center justify-center space-x-1'>
            {/* Render Full Stars */}
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <FaStar key={`full-${index}`} className="text-yellow-400" />
            ))}

            {/* Render Half Star (if necessary) */}
            {rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400" />}

            {/* Render Empty Stars */}
            {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
              <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
            ))}
          </div>
          {/* Display Numerical Rating */}
          <span className="ml-4 text-black">
            ({rating}/5)
          </span>
        </div>
      </div>

      {/* BookCard Genres */}
      <div className='text-center bg-neutral-400 pb-3 text-lg text-black font-semibold tracking-wider rounded-b-[20px]'>
        <p>{genres?.join(", ") || "No genres listed"}</p>
      </div>

      {/* BookCard Author and Released Date */}
      <div className="grid grid-rows-1 grid-cols-2 mt-1 mb-3 gap-4">
        <div className='border bg-neutral-700 text-white rounded-xl p-1'>
          <p className='font-bold'>Author</p>
          <p>{author}</p>
        </div>
        <div className='border bg-neutral-700 text-white rounded-xl p-1'>
          <h2 className='font-semibold'>Released Date</h2>
          <p>{releasedDate}</p>
        </div>
      </div>


      {/* BookCard Description */}
      <div className='my-3 text-xl overflow-hidden text-ellipsis'>
        <p className='line-clamp-3'>{description}</p>
      </div>

      {/* BookCard Link */}
      <div className="flex flex-col mt-auto gap-3">
        {/* Primary Button */}
        <MotionLink
          href={`/books/${slug}`}
          aria-label='Read more about this book'
          className="p-4 bg-amber-600 text-white font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.04 }}
          whileFocus={{ scale: 1.02 }}
        >
          Read More About This Book
        </MotionLink>

        {/* Secondary Button */}
        <MotionLink
          href={`/books/${slug}`}
          aria-label='See reader reviews'
          className="flex items-center justify-center p-4 bg-neutral-200 text-gray-800 font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.03 }}
          whileFocus={{ scale: 1.01 }}
        >
          See Reader Reviews
        </MotionLink>
      </div>
    </article>
  );
};

export default BookCard;
