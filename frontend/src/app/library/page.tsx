import SongRow from '@/components/SongRow'
import {  SongProps } from '@/types'

export default async function Home() {
  const songs = await getSongs()
  return (
    <main className="px-30">
      <h1 className="text-2xl text-white font-semibold py-10 px-20">Song Library</h1>
      <table className="table-fixed pl-20 ml-10 py-10">
        <thead>
          <tr>
            <th className="w-1/6 opacity-60 text-left">Title</th>
            <th className="w-1/6 opacity-60 text-left">Artist</th>
            <th className="w-1/12 opacity-60 text-left">Options</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: SongProps, key: any) => (
            <SongRow song={song} key={key} />
          ))}
        </tbody>
      </table>
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