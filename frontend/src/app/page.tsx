import Link from 'next/link'
import Navbar from './_components/Navigation'

interface File {
  _id: String,
  originalName: string
}

interface SongModel extends File {
  metadata: {
    title: string,
    artist: string
  }
}

export default async function Home() {
  const songs = await getSongs()
  return (
    <main>
      <Navbar />
      <h1 className="text-xl text-center font-semibold">Song Library</h1>
      <ul className="flex flex-row justify-around">
        {songs.map((song: SongModel) => (
          <li className="mb-6">
            <h2 className="text-xl font-semibold">{song.metadata.title}</h2>
            <p className="text-gray-600">{song.metadata.artist}</p>
            <a href={`/api/download/${song._id}`}>Download</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

async function getSongs() {
  const res = await fetch('http://eavesdrop-backend-1:5000/api/songs', {cache: 'no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch songs')
  }

  return res.json()
}