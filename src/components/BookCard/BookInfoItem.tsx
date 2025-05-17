import React from 'react';

type BookInfoItemProps = {
  title: string;
  value: string | number;
  bordered?: boolean;
  padding?: string;
};

const BookInfoItem: React.FC<BookInfoItemProps> = ({
  title,
  value,
  bordered = false,
  padding = 'p-4',
}) => {
  return (
    <div className={`${bordered ? 'border' : ''} bg-neutral-600 text-neutral-50 rounded-xl ${padding}`}>
      <p className="text-amber-300 text-2xl font-bold">{title}</p>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default BookInfoItem;
