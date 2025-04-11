"use client"
import BookFilter from '@/components/BookFilter'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/navBar/NavBar'
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