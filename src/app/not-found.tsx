import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="image-warper relative">
        {/* Add a semi-transparent overlay for the vintage theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-900/80"></div>
        <div className="text-overlay relative p-6">
          <h1 className="text-5xl mb-5 font-extrabold tracking-tight text-white drop-shadow-lg leading-relaxed animate-fade-in text-center">
            Oops! Page Not Found
          </h1>
          <p className="text-xl mt-10 text-gray-200 max-w-lg text-center drop-shadow-md leading-loose animate-fade-in-delay">
            We couldn't find the page you were looking for. But don't worry, let's get you back on track!
          </p>
          <Link href="/" legacyBehavior>
            <a className="mt-10 inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-8 rounded shadow-lg hover:scale-105 transition duration-500 ease-in-out animate-fade-in-delay">
              Back to the Library
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}