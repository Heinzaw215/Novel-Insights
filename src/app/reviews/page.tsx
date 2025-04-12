import React from 'react';
import GradientOverlay from '@/components/misc/GradientOverlay';
import SectionHeader from '@/components/SectionHeader';

const ReviewsPage = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-yellow-800 to-yellow-600 flex flex-col justify-center items-center pb-12">
      <GradientOverlay
        as="div"
        direction="to-l"
        from="from-yellow-800/50"
        via="via-transparent"
        to="to-yellow-500/80"
        zIndex="z-0"
      />

      <div className="relative z-10 text-center p-6">
        <SectionHeader
          title="Discover Your Next Favorite Book"
          titleStyle="font-semibold md:font-bold lg:font-extrabold text-yellow-400"
          subtitle="Dive into insightful reviews, uncover hidden gems, and explore the world of literature like never before."
          subtitleStyle="text-yellow-200 font-medium md:font-bold lg:font-extrabold mt-4 mb-8 max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default ReviewsPage;
