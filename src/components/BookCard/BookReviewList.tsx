import React from 'react';
import { Review } from '@/schemas/reviews';

interface BookReviewListProps {
  reviews: Review[];
}

const BookReviewList: React.FC<BookReviewListProps> = ({ reviews }) => {

  return (
    <div className="grid col-span-2 bg-white rounded-2xl shadow-lg px-4" id='reviews'>
      <h2 className="text-3xl font-bold mb-2 underline">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <p className="text-lg font-semibold">{review.reviewer}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
            <p className="text-base mt-2 italic text-amber-700">&quot;{review.excerpt}&quot;</p>
            {review.content && (
              <p className="text-base mt-2">{review.content}</p>
            )}
            <div className="text-sm text-gray-500 mt-2">
              <span className="font-medium">Rating:</span> {review.rating} / 5
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-medium">Genres:</span> {review.genres.join(', ')}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">
          There is no review to display.
        </p>
      )}
    </div>
  );
};

export default BookReviewList;
