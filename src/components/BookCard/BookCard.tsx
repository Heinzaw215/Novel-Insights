// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Book } from '@/schemas/book';
import { Review } from '@/schemas/reviews';
import BookCardBox from './BookCardTitleBox';
// import { GenreTag } from '../ReviewsCard';

const MotionLink = motion.create(Link);

const BookCard = ({ book, review }: { book: Book, review: Review }) => {
  const { bookName, bookCover, author, releasedDate, description, slug } = book;


  const ViewOnNewTab = () => {
    console.log("This is working!!");
  }

  return (
    <article className="bg-white border-black rounded-xl p-3 max-w-md mx-auto shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl
    hover:ring-3 hover:ring-gray-300 hover:bg-neutral-100">

      {/* BookCard Image */}
      <Image
        src={bookCover}
        alt={bookName || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-[20px] mb-2"
        loading="lazy"
        aria-label={`${bookName} Book Cover`}
        onClick={ViewOnNewTab}
        draggable="true"
      />

      {/* BookCardBox includes title,price, rating, genres */}
      <BookCardBox book={book} />

      {/* BookCard Author and Released Date */}
      <div className="grid grid-rows-1 grid-cols-2 text-center mt-1 mb-3 gap-4">
        <div className=' bg-neutral-700 text-white rounded-xl p-1'>
          <h2 className='font-semibold text-2xl'>Author</h2>
          <p>{author}</p>
        </div>
        <div className=' bg-neutral-700 text-white rounded-xl p-1'>
          <h2 className='font-semibold text-xl'>Released Date</h2>
          <p>{releasedDate}</p>
        </div>
      </div>


      {/* BookCard Description */}
      <div className='my-3 text-xl overflow-hidden text-ellipsis '>
        <p className='line-clamp-3'>{description}</p>
      </div>

      {/* BookCard Link */}
      <div className="flex gap-4">
        {/* Primary Button */}
        <MotionLink
          href={`/books/${slug}`}
          aria-label='Read more about this book'
          className="p-3 bg-amber-600 text-white font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.04 }}
          whileFocus={{ scale: 1.02 }}
        >
          Read More
        </MotionLink>

        {/* Secondary Button */}
        <MotionLink
          href={`/books/${slug}#reviews`}
          aria-label='See reader reviews'
          className="p-3 bg-neutral-200 text-amber-600 font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.03 }}
          whileFocus={{ scale: 1.01 }}
        >
          View Reviews
        </MotionLink>
      </div>
    </article>
  );
};

export default BookCard;
