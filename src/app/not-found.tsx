import { notFoundConfig } from '@/config/notFoundConfig';
import Link from 'next/link';

const NotFoundPage = () => {

  // Destructuring Props
  const { title, subtitle, booksButtonLabel, booksButtonLink, homeButtonLabel, homeButtonLink } = notFoundConfig;

  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-wrapper relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-900/80"></div>
        <div className=" flex flex-col justify-center relative">

          {/* Not Found Page Title */}
          <h1 className="text-5xl mb-3 font-bold tracking-tight text-neutral-200 drop-shadow-lg shadow-neutral-300 leading-relaxed animate-fade-in text-center">
            {title}
          </h1>

          {/* Not Found Page Subtitle */}
          <p className="text-xl mt-4 mx-4 text-gray-200 max-w-lg text-center drop-shadow-md leading-loose animate-fade-in-delay">
            {subtitle}
          </p>

          {/* Not Found Page Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Link
              href={homeButtonLink}
              className="text-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold tracking-wide py-3 px-8 rounded-l-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Return to the Home Page"
              title="Return to the Home Page"
            >
              {homeButtonLabel}
            </Link>
            <Link
              href={booksButtonLink}
              className="text-xl bg-white text-amber-800 border border-amber-800 font-semibold tracking-wide py-3 px-8 rounded-r-full shadow-md hover:bg-neutral-300 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Browse Available Books"
              title="Browse Available Books"
            >
              {booksButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
