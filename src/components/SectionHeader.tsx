import React, { JSX } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleStyle?: string;
  subtitleStyle?: string;
  as?: keyof JSX.IntrinsicElements; // Allow h1, h2, etc.
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleStyle = 'text-3xl sm:text-4xl md:text-5xl font-bold',
  subtitleStyle = 'text-base sm:text-lg text-gray-600 mt-2',
  as: HeadingTag = 'h2', // default to h2
}) => {
  return (
    <div className="w-full text-center">
      <HeadingTag className={titleStyle}>{title}</HeadingTag>
      {subtitle && (
        <p className={subtitleStyle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
