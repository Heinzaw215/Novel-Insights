
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const BookCardButtons = ({ slug }: { slug:string }) => {
  return (
    <div className="flex gap-4 mt-3">
      {/* Primary Button */}
      <MotionLink
        href={`/books/${slug}`}
        aria-label='Read more about this book'
        className="p-3 bg-amber-600 text-white font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50"
        whileHover={{ scale: 1.04 }}
      >
        Read More
      </MotionLink>

      {/* Secondary Button */}
      <MotionLink
        href={`/books/${slug}#reviews`}
        aria-label='See reader reviews'
        className="p-3 bg-neutral-200 text-amber-600 font-bold rounded-xl transition duration-300 ease-in-out text-center w-full hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-400 focus:ring-opacity-50"
        whileHover={{ scale: 1.03 }}
      >
        View Reviews
      </MotionLink>
    </div>
  )
}

export default BookCardButtons