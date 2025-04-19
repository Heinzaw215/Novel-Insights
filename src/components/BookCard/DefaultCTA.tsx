// components/DefaultCTA.tsx
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { landingCTA } from '@/config/landingPageConfig';

const MotionLink = motion.create(Link);

const DefaultCTA = () => (
  <MotionLink
    href="/books"
    aria-label="Explore our collection of books"
    className="mt-2 inline-block bg-amber-700 text-white font-bold py-2 px-8 rounded-full shadow-lg"
    whileHover={{ scale: 1.05, backgroundColor: "#92400e" }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
  >
    {landingCTA}
  </MotionLink>
);

export default DefaultCTA;
