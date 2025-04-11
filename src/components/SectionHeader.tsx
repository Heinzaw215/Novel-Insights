// components/SectionHeader.tsx
import React from 'react';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <h1 className="text-5xl mb-5 font-extrabold tracking-tight text-white drop-shadow-lg leading-relaxed animate-fade-in">
      {title}
    </h1>
    <p className="text-xl mt-10 text-gray-200 max-w-lg text-center drop-shadow-md leading-loose animate-fade-in-delay">
      {subtitle}
    </p>
  </>
);

export default SectionHeader;
