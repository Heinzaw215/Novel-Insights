import React from 'react';
import StarRating from './StarRating';
import ReviewerInfo from './ReviewerInfo';
import GenreTag from './GenreTag';
import { Review } from '@/types/reviews'

const ReviewCard = ({ title, excerpt, rating, reviewer, date, genres }: Review) => (
  <div className="bg-yellow-100 rounded-2xl shadow-lg p-6 space-y-4 hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-xl font-bold text-yellow-900">{title}</h3>
    <StarRating rating={rating} />
    <p className="text-gray-800">{excerpt}</p>
    <ReviewerInfo name={reviewer} date={date} />
    <div className="flex flex-wrap gap-2">
      {genres.map((genre, idx) => <GenreTag key={idx} label={genre} />)}
    </div>
  </div>
);

export default ReviewCard;
