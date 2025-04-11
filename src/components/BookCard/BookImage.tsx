// components/BookImage.tsx
import React from 'react';

const BookImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg mb-6"
  />
);

export default BookImage;
