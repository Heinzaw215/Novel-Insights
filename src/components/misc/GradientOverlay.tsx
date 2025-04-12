import React, { JSX } from 'react';

interface GradientOverlayProps {
  className?: string;
  direction?: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-tl' | 'to-tr' | 'to-bl' | 'to-br';
  from?: string;
  via?: string;
  to?: string;
  zIndex?: string;
  as?: keyof JSX.IntrinsicElements;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  className = '',
  direction = 'to-r',
  from = 'from-black/50',
  via = 'via-transparent',
  to = 'to-black/80',
  zIndex = 'z-0',
  as: Component = 'div',
}) => {
  const gradientClasses = `bg-gradient-${direction} ${from} ${via} ${to}`;
  
  return (
    <Component className={`absolute inset-0 ${gradientClasses} ${zIndex} ${className}`} />
  );
};

export default GradientOverlay;