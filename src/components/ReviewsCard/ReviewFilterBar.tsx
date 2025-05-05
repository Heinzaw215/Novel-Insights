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
}: ReviewFilterBarProps) => {
  return (
    <>
      <div className="w-full flex flex-wrap gap-4 justify-between items-center p-4">
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
      </div>

      <div className=""
        aria-label="Filter by genre">
        <button type='button' className='bg-amber-100 p-6 rounded-full hover:bg-amber-400'
        onClick={() => console.log("Clicked.")}>All Genres</button>
        <button type='button'>Fiction</button>
        <button type='button'>Mystery</button>
        <button type='button'>Romance</button>
      </div>

      <div className="w-full flex flex-wrap gap-4 justify-between items-center p-4">
        <select
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="bg-white px-4 py-2 rounded-lg"
          aria-label="Filter by genre"
        >
          {/* {map.} */}
          <option value="">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Romance">Romance</option>
          <option value="Romance">Romance</option>
          <option value="Romance">Romance</option>
          <option value="Romance">Romance</option>
          <option value="Romance">Romance</option>
          {/* Add more as needed */}
        </select>
      </div>
    </>
  );
};

export default ReviewFilterBar;
