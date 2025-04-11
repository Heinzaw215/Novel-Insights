'use client';

import React, { useState } from 'react';

interface Book {
  id: number;
  name: string;
  author: string;
  categories: string[];
  rating: number;
  isAvailable: boolean;
  releasedDate: Date;
  description: string;
  bookcover: string;
}

interface BookFilterProps {
  books: Book[];
  onFilter: (filteredBooks: Book[]) => void;
}

const BookFilter: React.FC<BookFilterProps> = ({ books, onFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(value.toLowerCase())
    );

    onFilter(filtered);
  };

  return (
    <div className="w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="🔍 Search books by title..."
        value={search}
        onChange={handleSearch}
        className="w-full px-4 py-3 rounded-xl shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
      />
    </div>
  );
};

export default BookFilter;
