import ReviewerInfo from './ReviewerInfo';
import StarRating from './StarRating';
import GenreTag from './GenreTag';
import { Review } from '@/types/reviews';

const ReviewDetails = ({ title, excerpt, rating, reviewer, date, genres }: Review) => (
  <div className="bg-yellow-100 p-6 rounded-lg shadow-lg space-y-3">
    <h3 className="text-2xl font-bold text-yellow-900">{title}</h3>
    <StarRating rating={rating} />
    <ReviewerInfo name={reviewer} date={date} />
    <p className="text-gray-800">{excerpt}</p>
    <div className="flex flex-wrap gap-2">
      {genres.map((genre, i) => (
        <GenreTag key={i} genre={genre} />
      ))}
    </div>
  </div>
);

export default ReviewDetails;
