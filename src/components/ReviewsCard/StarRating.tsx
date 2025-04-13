import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const starFill = rating - i;

    if (starFill >= 1) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (starFill >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars}
    </div>
  );
};

export default StarRating;
