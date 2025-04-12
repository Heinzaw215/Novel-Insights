// components/Main.tsx
import React from 'react';
import SectionHeader from './SectionHeader';
import DefaultCTA from './BookCard/DefaultCTA';
import GradientOverlay from './misc/GradientOverlay';

type MainProps = {
  renderCTA?: () => React.ReactNode;
};

const LandingPage: React.FC<MainProps> = ({ renderCTA }) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-wrapper relative">
        <GradientOverlay
          as='div'
          direction="to-b"
          from="from-amber-900/50"
          via="via-transparent"
          to="to-amber-900/80"
        />

        <div className="text-overlay relative p-2">
          <SectionHeader
            title="Discover Your Next Favorite Book"
            titleStyle="font-semibold md:font-bold lg:font-extrabold text-yellow-400"
            subtitle="Dive into insightful reviews, uncover hidden gems, and explore the world of literature like never before."
            subtitleStyle="text-yellow-200 font-medium md:font-bold lg:font-extrabold max-w-2xl mx-auto"
          />

          {renderCTA ? renderCTA() : <DefaultCTA />}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
