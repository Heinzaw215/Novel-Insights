// components/BookInfoItem.tsx
import React from 'react';

const BookInfoItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <p className="text-lg space-x-2 my-4">
    <span className="font-medium text-gray-800">{label}:</span>
    <span className="text-gray-700">{value}</span>
  </p>
);

export default BookInfoItem;
