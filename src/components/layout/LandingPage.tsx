// components/Main.tsx
import React from 'react';
import SectionHeader from '../SectionHeader';
import DefaultCTA from '../BookCard/DefaultCTA';
import GradientOverlay from '../misc/GradientOverlay';
import { landingConfig } from "@/config/landingPageConfig";
import { motion } from 'framer-motion';
// import BookList from "@/data/bookData";


// export async function getStaticProps() {
//   return {
//     props: { books: BookList } 
//   }
// }

const { title, subtitle } = landingConfig.default;

const LandingPage = () => {
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

        <motion.div
          className="text-overlay relative p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            title={title}
            titleStyle="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400"
            subtitle={subtitle}
            subtitleStyle="text-yellow-200 text-base sm:text-lg lg:text-xl font-medium"
          />

          <DefaultCTA />
        </motion.div>
      </div>
    </main >
  );
};

export default LandingPage;
