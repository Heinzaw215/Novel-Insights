import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

const BookCardImage = ({ src, alt, onClick }: Props) => (
  <Image
    src={src}
    alt={alt}
    width={200}
    height={600}
    className="w-full h-64 object-cover rounded-[20px] mb-2"
    onClick={onClick}
    draggable
    loading='lazy'
  /> 
  // 
);

export default BookCardImage;
