import Link from 'next/link'

interface SongModel {
  title: string,
  artist: string
}

export default async function Home() {
  const songs = await getSongs()
  return (
    <main>
      <h1>Homepage</h1>
      <ul>
        {songs.map((song: SongModel) => (
          <li className="mb-6">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-600">{song.artist}</p>
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