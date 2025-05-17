import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Book } from '@/schemas/book';

const BookCardBox = ({ book }: { book: Book }) => {
  const { bookName, price, genres, reviews } = book;

  // Calculate average rating from reviews
  const averageRating =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  // Clamp averageRating between 0 and 5
  const rating = Math.min(5, Math.max(0, averageRating));

  return (
    <section className='flex flex-col my-4'>
      <div className='flex items-center gap-x-1 p-2 bg-neutral-300 rounded-t-[20px]'>
        <h2 className={`font-extrabold italic text-gray-800 w-2/3 text-left line-clamp-3 ${bookName?.length > 20 ? "text-[1.25rem]" : "text-[2rem]"}`}>
          {bookName}
        </h2>

        <div className='w-1/3 font-mono text-center'>
          <p className='text-[1.75rem] font-medium'>${price}</p>

          <div className='flex items-center justify-center space-x-1'>
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <FaStar key={`full-${index}`} className="text-yellow-400" />
            ))}

            {rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400" />}

            {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
              <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
            ))}
          </div>
          <span className="ml-4 text-black">
            Rating: {rating.toFixed(1)} out of 5 from {reviews?.length || 0} reviews
          </span>
        </div>
      </div>
      <div className='text-center bg-neutral-400 py-3 text-lg text-black font-semibold tracking-wider rounded-b-[20px]'>
        <p>{genres?.join(", ") || "No genres listed"}</p>
      </div>
    </section>
  );
};

export default BookCardBox;
