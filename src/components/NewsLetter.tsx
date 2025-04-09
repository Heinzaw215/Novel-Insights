import React from 'react'

const NewsLetter = () => {
  return (
    // {/* Newsletter Section */}
    <div className="w-full md:w-1/3 xl:w-1/4 px-4 mb-6 md:mb-0">
    <h5 className="text-xl font-serif text-yellow-100 font-semibold mb-4">Newsletter</h5>
    <p className="text-base text-gray-600 leading-relaxed mb-4">
      Stay updated with the latest book reviews, recommendations, and news from our community.
    </p>
    <form className="flex space-x-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 w-full rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-300"
        required
      />
      <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-300">
        Subscribe
      </button>
    </form>
  </div>
  )
}

export default NewsLetter