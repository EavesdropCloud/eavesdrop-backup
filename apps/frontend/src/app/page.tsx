import SongRow from '@/components/SongRow'
import {  SongProps } from '@/types'

export default async function Home() {
  const songs = await getSongs()
  return (
    <main className="px-30">
      <h1 className="text-2xl text-left font-semibold pt-10 px-20">Song Library</h1>
      <div className="grid grid-cols-[50%,30%,10%] gap-4 pl-20 py-10 ml-5">
        <div className="opacity-60">Title</div>
        <div className="opacity-60">Artist</div>
        <div></div>

        {songs.map((song: SongProps, key: any) => (
          <SongRow song={song} key={key}/>
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