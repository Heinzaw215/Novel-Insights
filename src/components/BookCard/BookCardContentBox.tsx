import React from 'react'
import { Book } from '@/schemas/book';
// import BookCardInfoGroup from './BookInfoGroup';

const BookCardContentBox = ({ book }: { book: Book }) => {
  const { author, releasedDate, publisher, pageCount } = book;
  return (
    <div className="grid grid-cols-2 text-center py-2 gap-4">
      {/* <BookCardInfoGroup author={''} releasedDate={''} publisher={''} pageCount={0}/> */}
      <div className="border bg-neutral-600 text-amber-50 rounded-xl p-2">
        <p className="text-amber-300 text-2xl font-bold">Author</p>
        <p className="text-lg">{author}</p>
      </div>
      <div className="bg-neutral-600 text-neutral-50 rounded-xl p-2">
        <p className="text-amber-300 text-2xl font-bold">Released Date</p>
        <p className="text-lg">{releasedDate}</p>
      </div>
      <div className="bg-neutral-600 text-neutral-50 rounded-xl p-4">
        <p className="text-amber-300 text-2xl font-bold">Publisher </p>
        <p className="text-lg">{publisher}</p>
      </div>
      <div className="bg-neutral-600 text-neutral-50 rounded-xl p-4">
        <p className="text-amber-300 text-2xl font-bold">Page Count</p>
        <p className="text-lg">{pageCount}</p>
      </div>
    </div>
  )
}

export default BookCardContentBox