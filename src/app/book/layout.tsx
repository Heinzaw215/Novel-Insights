"use client"
import BookFilter from '@/components/BookCard/BookFilter'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar/NavBar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <BookFilter books={[]} onFilter={function (): void {
        throw new Error('Function not implemented.')
      } } />
      {children}
      <Footer />
    </div>
  )
}

export default layout