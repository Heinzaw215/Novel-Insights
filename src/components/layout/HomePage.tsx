import React from 'react'
import TopRatedBooks from '../TopRatedBooks'
import { BooksData } from '@/data/bookData'
// import { ReviewList } from '../ReviewsCard'

const HomePage = () => {
  const Book = BooksData; // Assuming BooksData is an array of book objects
  return (
    <div className="bg-amber-600 min-h-screen p-8">
      <div className="grid grid-rows-1 gap-5 mx-2 bg-amber-500 shadow-md">
        <div>
          <h2 className='ml-3 mt-3 text-3xl underline underline-offset-4 font-bold mb-4 left '>Top Rated Books</h2>
          <TopRatedBooks books={Book} /> {/* Pass the actual books data here */}
        </div>
        <div>
        <h2 className='flex justify-end'>New Added Books</h2>
        </div>
        <div>
        <h2>Genre Categories</h2>
        </div>
        <h2 className='flex justify-end'>Best reviewed Books</h2>

        {/* <ReviewList initialLimit={6} loadMoreCount={30} /> */}
      </div>
    </div>
  )
}

export default HomePage
