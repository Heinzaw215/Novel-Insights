"use client";

import Link from 'next/link';
// import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <Link href="/" className="text-blue-500 hover:underline">
        <h1>Back to Home</h1>
      </Link>
      <h1>Login</h1>
      <p>Login page content goes here.</p>
      {/* Add your login form or other components here */}
    </div>
  )
}

export default LoginPage