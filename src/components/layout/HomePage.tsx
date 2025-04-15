import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { ReviewList } from '../ReviewsCard'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-amber-600 min-h-screen p-8">
        <header className='flex flex-col items-center p-4'>
          <h1 className='text-4xl font-extrabold text-white'>Home Page</h1>
          <p className='text-xl font-medium text-white mt-2'>Welcome to my Website.</p>
        </header>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6 p-2 text-center">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 text-xl rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <p className="text-xl font-semibold">Item {index + 1}</p>
            </div>
          ))}
        </div>

        <div className="mx-6">
          <ReviewList initialLimit={6}  loadMoreCount={30}/> {/*limit='6'*/}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
