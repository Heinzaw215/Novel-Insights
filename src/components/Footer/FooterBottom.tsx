const FooterBottom = () => (
  <div className="text-center text-sm md:text-base text-gray-900 mt-10 pt-6 border-t border-yellow-400 space-y-2">
    <div>
      &copy; {new Date().getFullYear()}{' '}
      <span className="font-medium hover:text-orange-600 transition-colors duration-300">
        Novel Insights
      </span>. All rights reserved.
    </div>
    <div>
      Designed and Developed by{' '}
      <span className="font-medium hover:text-orange-600 transition-colors duration-300">
        Your Name
      </span>
    </div>
  </div>
);

export default FooterBottom;
