import Song from '@/components/Song'
import { SongModel } from '@/types'

export default async function Home() {
  const songs = await getSongs()
  return (
    <main>
      <h1 className="text-xl text-center font-semibold">Song Library</h1>
      <ul className="flex flex-row justify-around">
        {songs.map((song: SongModel) => (
          <Song song={song} />
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