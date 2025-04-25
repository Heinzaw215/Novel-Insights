"use client";

import { JSX, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { sampleReviews } from '@/data/reviewData';
import LoadingSpinner from '../misc/LoadingSpinner';

interface ReviewListProps {
  initialLimit?: number;
  loadMoreCount?: number;
}

const ReviewList = ({ initialLimit = 12, loadMoreCount = 12 }: ReviewListProps) => {
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [status, setStatus] = useState<'loading' | 'success' | 'empty' | 'error'>('loading');

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + loadMoreCount);
  };

  const reviewsToDisplay = sampleReviews.slice(0, visibleCount);
  const hasMore = visibleCount < sampleReviews.length;

  // Simulate status loading (like API call)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sampleReviews.length === 0) {
        setStatus('empty');
      } else {
        setStatus('success');
      }
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

  const statusMap: Record<string, JSX.Element> = {
    loading: <LoadingSpinner/>,
    error: <p className="text-center text-red-500">Error loading reviews.</p>,
    empty: <p className="text-center text-gray-500">No reviews found.</p>,
    success: (
      <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsToDisplay.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition duration-200"
            >
              Show More
            </button>
          ) : (
            <p className="text-gray-800 text-md mt-2">--- No more contents to show. ---</p>
          )}
        </div>
      </>
    ),
  };

  const fallback = <p className="text-center text-gray-400">Unknown status.</p>;

  return (
    <div className="mt-20 transition-all">
      {statusMap[status] || fallback}
    </div>
  );
};

export default ReviewList;
