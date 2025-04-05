import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Novel Insight. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer