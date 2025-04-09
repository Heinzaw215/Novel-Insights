import Footer from '@/components/Footer'
import NavBar from '@/components/navBar/NavBar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default layout