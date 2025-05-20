// components/BookCard.tsx
import { Book } from '@/schemas/book';
import dynamic from 'next/dynamic';
import BookCardImage from './BookImage';
import BookCardMeta from './BookCardMeta';
import BookCardBox from './BookCardTitleBox';
// import { GenreTag } from '../ReviewsCard';

const BookCardButtons = dynamic(() => import('./BookCardButtons'), { ssr: false });

const BookCard = ({ book }: { book: Book }) => {
  const { bookName, bookCover, author, releasedDate, description, slug } = book;

  return (
    <article className="bg-white border-black rounded-xl p-3 max-w-md mx-auto shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl
    hover:ring-3 hover:ring-gray-300 hover:bg-neutral-100">

      {/* BookCard Image */}
      <BookCardImage src={bookCover} alt={bookName} onClick={() => console.log("Clicked")} />

      {/* BookCardBox includes title,price, rating, genres */}
      <BookCardBox book={book} />

      {/* BookCard Author and Released Date */}
      <BookCardMeta author={author} releasedDate={releasedDate} />

      {/* BookCard Description */}
      <div className='my-3 text-xl overflow-hidden text-ellipsis '>
        <p className='line-clamp-3'>{description}</p>
      </div>

      {/* BookCard Link */}
      <BookCardButtons slug={slug} />
    </article>
  );
};

export default BookCard;
