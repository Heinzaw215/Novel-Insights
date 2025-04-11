import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-wrapper relative h-screen"> {/* Added h-screen for full height */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-900/80"></div>
        <div className="text-overlay relative p-6">
          <h1 className="text-5xl mb-5 font-extrabold tracking-tight text-white drop-shadow-lg leading-relaxed animate-fade-in text-center">
            Oops! Chapter Not Found.
          </h1>
          <p className="text-xl mt-10 text-gray-200 max-w-lg text-center drop-shadow-md leading-loose animate-fade-in-delay">
            It seems you&apos;ve turned to a page that doesn&apos;t exist in our library. But no worries—there are many stories still waiting to be discovered.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay">
            <Link
              href="/"
              className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold tracking-wide py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-3 transform hover:scale-105 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Return to the Home Page"
            >
              <span className="text-2xl">🏠</span> Return to Home
            </Link>
            <Link
              href="/book"
              className="bg-white text-amber-800 border border-amber-800 font-semibold tracking-wide py-3 px-8 rounded-full shadow-md hover:bg-amber-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-3 transform hover:scale-105 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Browse Available Books"
            >
              <span className="text-2xl">📚</span> Browse Books
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
