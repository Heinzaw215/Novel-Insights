// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Book } from '@/types/book';
// import { GenreTag } from '../ReviewsCard';

const MotionLink = motion.create(Link);

const BookCard = ({ book }) => {
  return (
    <article className="bg-white border-black shadow-md rounded-[20px] p-3 max-w-md mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={book.bookCover}
        alt={book.name || "Book Cover"}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-[20px] mb-2"
        loading="lazy"
      />
      <div className='flex items-center p-2 bg-neutral-300 rounded-t-[20px]'>
        <h2 className={`font-extrabold italic text-gray-800 w-3/4 text-left text-clip ${book.name.length > 20 ? "text-[1.25rem]" : "text-[2rem]"}`
        }>
          
          {book.name}
        </h2>
        <div className='w-1/4 font-mono text-center'>
          <p className='text-[1.75rem] font-medium'>${book.price}</p>
          <p className='text-[1.25rem] font-medium text-yellow-800'>⭐{book.rating}/5</p>
        </div>
      </div>
      <div className='bg-neutral-400 py-3 text-lg text-white font-semibold tracking-wider rounded-b-[20px]'>
        <p>{book.genres.join(", ")}</p>
      </div>

      <div className="grid grid-rows-1 grid-cols-2 mt-1 mb-3 gap-4">
        <div className='border bg-neutral-700 text-white rounded-xl p-1'>
          <p className='font-bold'>Author</p>
          <p>{book.author}</p>
        </div>
        <div className='border bg-neutral-700 text-white rounded-xl p-1'>
          <h2 className='font-semibold'>Released Date</h2>
          <p>{book.releasedDate}</p>
        </div>
      </div>

      <div className='my-3 text-xl'>
        <p>{book.description}</p>
      </div>

      <div className="grid">
        <MotionLink href={`/books/${book.id}`} className="p-2 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-[12px] transition duration-300 
        focus:border-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
          whileHover={{ backgroundColor: "#333" }}
          whileFocus={{ border: "2px solid #333" }}>
          View Details
        </MotionLink>
      </div>
    </article>
  );
};

export default BookCard;
