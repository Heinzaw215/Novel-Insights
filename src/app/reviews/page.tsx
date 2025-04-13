import React from 'react';
import { ReviewForm, ReviewList } from '@/components/ReviewsCard';

const ReviewsPage = () => {
  // const [genre, setGenre] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');

  // const filteredReviews = sampleReviews.filter((review) => {
  //   const matchesGenre = genre === '' || review.genres.includes(genre);
  //   const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     review.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   return matchesGenre && matchesSearch;
  // });

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-yellow-800 to-yellow-600 flex flex-col justify-center items-center pb-12">
      {/* <ReviewFilterBar
        genre={genre}
        onGenreChange={setGenre}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      /> */}

      <div className="relative z-10 text-center p-6">
        {/* Optional header here */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* {filteredReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))} */}
      </div>

      {/* All reviews */}
      <ReviewList />
      
      {/* Review submission form */}
      <div className="mt-12 w-full max-w-2xl">
        <ReviewForm />
      </div>
    </section>
  );
};

export default ReviewsPage;
