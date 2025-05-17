import Link from "next/link";

const FooterBottom = () => (
  <section 
  className="text-center text-sm md:text-base text-gray-900 mt-10 pt-4 pb-2 border-t border-yellow-400 space-y-2">
    <div>
      <span
        className="font-semibold hover:text-orange-600 transition-colors duration-300"
        title="Go to GitHub Source Code"
      >
        Novel Insights
      </span> &copy; {new Date().getFullYear()}{' '}. All rights reserved.
    </div>

    <div>
      Designed and Developed by{' '}
      <Link
        href='#'
        className="font-bold text-lg hover:text-orange-600 transition-colors duration-300"
        title="Go To HeinzZaw Github Page"
        aria-label="Go To HeinzZaw Github Page"
      >
        HeinzZaw
      </Link>
    </div>
  </section>
);

export default FooterBottom;
