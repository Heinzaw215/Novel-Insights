import React from 'react';
import BookInfoItem from './BookInfoItem';

type BookInfoGroupProps = {
  author: string;
  releasedDate: string;
  publisher: string;
  pageCount: number;
};

const BookInfoGroup: React.FC<BookInfoGroupProps> = ({
  author,
  releasedDate,
  publisher,
  pageCount,
}) => {
  return (
    <div className="grid gap-4">
      <BookInfoItem title="Author" value={author} bordered padding="p-2" />
      <BookInfoItem title="Released Date" value={releasedDate} padding="p-2" />
      <BookInfoItem title="Publisher" value={publisher} />
      <BookInfoItem title="Page Count" value={pageCount} />
    </div>
  );
};

export default BookInfoGroup;
