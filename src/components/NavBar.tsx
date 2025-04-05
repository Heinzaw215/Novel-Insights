import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center text-gray-600 dark:text-gray-400">
        <h1 className="text-2xl font-bold">Novel Insight</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-800 dark:hover:text-gray-200">Home</a></li>
          <li><a href="/about" className="hover:text-gray-800 dark:hover:text-gray-200">About</a></li>
          <li><a href="/contact" className="hover:text-gray-800 dark:hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar