import SongRow from '@/components/SongRow'
import {  SongProps } from '@/types'

export default async function Home() {
  const songs = await getSongs()
  return (
    <main>
      <h1 className="text-xl text-center font-semibold">Song Library</h1>
      <div className="grid grid-cols-[40%,40%,10%] gap-4">
        <div>Title</div>
        <div>Artist</div>
        <div></div>

        {songs.map((song: SongProps) => (
          <SongRow song={song} />
        ))}
      </div>
    </main>
  )
}

async function getSongs() {
  const res = await fetch(process.env.BACKEND_API_BASE + "/songs", {cache: 'no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch songs')
  }

  return res.json()
}