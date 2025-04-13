const ReviewForm = () => (
  <form className="bg-yellow-100 p-6 rounded-xl shadow-md space-y-4 mt-10">
    <input type="text" placeholder="Book Title" className="w-full px-4 py-2 rounded" />
    <textarea placeholder="Your Review" className="w-full px-4 py-2 rounded h-32" />
    <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
      Submit Review
    </button>
  </form>
);

export default ReviewForm;
