import React from 'react';

interface ReviewFilterBarProps {
  genre: string;
  onGenreChange: (genre: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ReviewFilterBar = ({
  genre,
  onGenreChange,
  searchTerm,
  onSearchChange,
}: ReviewFilterBarProps) => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-between items-center bg-yellow-200 p-4 rounded-xl shadow-sm">
      <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg"
        aria-label="Filter by genre"
      >
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        {/* Add more as needed */}
      </select>

      <input
        type="text"
        placeholder="Search reviews..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg"
      />
    </div>
  );
};

export default ReviewFilterBar;
