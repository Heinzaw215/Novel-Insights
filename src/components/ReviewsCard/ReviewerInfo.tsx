type ReviewerInfoProps = {
  name: string;
  date: string;
};

const ReviewerInfo = ({ name, date }: ReviewerInfoProps) => (
  <div className="text-sm text-gray-800 mt-2">
    Reviewed by <span className="font-semibold hover:text-amber-500">{name}</span> on {date}
  </div>
);

export default ReviewerInfo;
