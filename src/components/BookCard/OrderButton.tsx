import Link from 'next/link'
import React from 'react'


const OrderButton = () => {
  return (
    <div className="flex align-middle">
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-l-full transition duration-300 hover:scale-105 flex items-center justify-center">
          View Details
        </Link>
        <Link href={`/book/${book.id}`} className="w-1/2  mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border border-black rounded-r-full transition duration-300 hover:scale-105 flex items-center justify-center">
          Order now
        </Link>
      </div>
  )
}

export default OrderButton