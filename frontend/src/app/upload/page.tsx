import Link from 'next/link'
import Navbar from '../../components/Navigation'
import React from 'react'

interface SongModel {    
    title: string
    artist: string
  }

export default async function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="text-xl text-center font-semibold mt-10">Upload yo songs</h1>
      <div className="m-50 flex justify-center border-2 border-white">
        <button className="m-10">Upload</button>
      </div>
    </main>
  )
}
