import React from 'react';

interface BookInfoItemProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

const BookInfoItem: React.FC<BookInfoItemProps> = ({ label, value, className='' }) => (
  <p className={`text-lg space-x-2 my-4 ${className}`}>
    <span className="font-bold text-gray-800">{label}:</span>
    <span className="font-light text-gray-700">{value}</span>
  </p>
);

export default BookInfoItem;
