"use client"
// import BookFilter from '@/components/BookCard/BookFilter'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <BookFilter books={[]} onFilter={function (): void {
        throw new Error('Function not implemented.')
      } } /> */}
      {children}
    </div>
  )
}

export default layout;