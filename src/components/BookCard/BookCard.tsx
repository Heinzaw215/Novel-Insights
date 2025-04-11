// components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type Book = {
  id: number;
  name: string;
  author: string;
  releasedDate: string;
  categories: string[];
  description: string;
  rating: number;
  isAvailable: boolean;
  bookcover: string;
};

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={book.bookcover}
        alt={book.name}
        width={200}
        height={600}
        className="w-full h-64 object-cover rounded-md mb-4"
        loading="lazy"
        placeholder="blur"
        blurDataURL={book.bookcover} // Optional: Low-quality image placeholder
      />
      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">{book.name}</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
        <span className="font-bold">Author:</span>
        <p>{book.author}</p>

        <span className="font-bold">Released Date:</span>
        <p>{book.releasedDate}</p>

        <span className="font-bold">Categories:</span>
        <p>{book.categories.join(', ')}</p>

        <span className="font-bold">Description:</span>
        <p className="text-sm line-clamp-3">{book.description}</p>

        <span className="font-bold">Rating:</span>
        <p>{book.rating} / 5</p>

        <span className="font-bold">Available:</span>
        <p className={book.isAvailable ? "text-green-600 font-medium" : "text-red-600 font-medium"}>{book.isAvailable ? 'Yes' : 'No'}</p>
      </div>
      <Link href={`/book/${book.id}`} className="w-1/2 flex items-center justify-center mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition duration-300 hover:scale-105">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
