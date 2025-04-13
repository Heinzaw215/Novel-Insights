import ReviewCard from './ReviewCard';
import { sampleReviews } from '@/data/reviewData'; // Ensure this path is correct

const ReviewList = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {sampleReviews.map((review, index) => (
      <ReviewCard key={index} {...review} />
    ))}
  </div>
);

export default ReviewList;
