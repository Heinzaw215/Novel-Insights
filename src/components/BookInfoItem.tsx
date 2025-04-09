// components/BookInfoItem.tsx
import React from 'react';

const BookInfoItem = ({ label, value }: { label: string; value: string }) => (
  <p className="text-lg text-gray-700">
    <span className="font-bold">{label}:</span> {value}
  </p>
);

export default BookInfoItem;
