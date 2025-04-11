// components/Main.tsx
import React from 'react';
import SectionHeader from './SectionHeader';
import DefaultCTA from './BookCard/DefaultCTA';

type MainProps = {
  renderCTA?: () => React.ReactNode;
};

const Main: React.FC<MainProps> = ({ renderCTA }) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-wrapper relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-900/80"></div>

        <div className="text-overlay relative p-6">
          <SectionHeader
            title="Discover Your Next Favorite Book"
            subtitle="Dive into insightful reviews, uncover hidden gems, and explore the world of literature like never before."
          />

          {renderCTA ? renderCTA() : <DefaultCTA />}
        </div>
      </div>
    </main>
  );
};

export default Main;
