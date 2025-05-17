// components/BookImage.tsx
import Image from 'next/image';
import React from 'react';

const BookImage = ({
  src,
  alt,
  width = 200,
  height = 600,
  label
} : {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg mb-6"
    aria-label={label}
  />
);

export default BookImage;
