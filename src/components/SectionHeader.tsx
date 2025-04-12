// components/SectionHeader.tsx
import React from 'react';

const SectionHeader = ({ title, subtitle, titleStyle, subtitleStyle }: { title: string; subtitle: string; titleStyle?:string; subtitleStyle?:string; }) => (
  <>
    <h1 className={`text-5xl font-extrabold ${titleStyle} drop-shadow-lg animate-fade-in`}>
      {title}
    </h1>
    <p className={`text-xl max-w-lg drop-shadow-md ${subtitleStyle} animate-fade-in-delay`}>
      {subtitle}
    </p>
  </>
);

export default SectionHeader;
