// components/BookImage.tsx
import Image from 'next/image';
import React from 'react';

const BookImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={200}
    height={600}
    className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg mb-6"
  />
);

export default BookImage;
