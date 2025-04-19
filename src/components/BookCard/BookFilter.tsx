'use client';

import React, { useState, useMemo } from 'react';

interface BookFilterProps {
  onFilter: (filters: {
    title: string;
    category: string;
    availableOnly: boolean;
  }) => void;
  categories: string[];
}

const BookFilter: React.FC<BookFilterProps> = ({ onFilter, categories }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);

  // const allCategories = useMemo(() => {
  //   const catSet = new Set<string>();
  //   books.forEach(book => books.forEach((cat: string) => catSet.add(cat)));
  // }, [books]);

  const handleFilter = () => {
    onFilter({ title, category, availableOnly });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6 p-4 bg-white shadow-lg rounded-xl">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      />

      <select
        aria-label='Select'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-md w-full md:w-1/4"
      />
      <select
        aria-label='Select'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-md w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label className="flex items-center space-x-2 w-full md:w-auto">
        <input
          type="checkbox"
          checked={availableOnly}
          onChange={() => setAvailableOnly(!availableOnly)}
        />
        <span>Available Only</span>
      </label>

      <button
        onClick={handleFilter}
        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default BookFilter;
