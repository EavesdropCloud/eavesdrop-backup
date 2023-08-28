import Link from 'next/link'
import Navbar from '../_components/Navigation'
import React from 'react'


export default async function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="text-xl text-center font-semibold mt-10">Upload yo songs</h1>
      <div className="m-50 flex justify-center border-2 border-white">
        <h1>Your account</h1>
      </div>
    </main>
  )
}
