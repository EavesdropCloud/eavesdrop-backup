'use client'

import SongRow from '@/components/SongRow'
import {  SongProps } from '@/types'
import { useState } from 'react';
import { api_proxy } from '@/config';


export default function Home() {
  const [songs, setSongs] = useState([]);

  fetch(api_proxy + "/api/songs/", {cache: 'no-store'}).then((res => {
    res.json().then(value => {
      setSongs(value);
    })
  })).catch(error => {
    console.error(error);
  });

  return (
    <main className="px-30">
      <h1 className="text-2xl text-white font-semibold py-10 px-20">Song Library</h1>
      <table className="max-w-7xl ml-20 py-10">
        <thead className='my-3'>
          <tr className='border-b border-b-raisin-200' >
            <th className="w-1/6 opacity-60 text-left pl-3">Title</th>
            <th className="w-1/6 opacity-60 text-left">Artist</th>
            <th className="w-1/12 opacity-60 text-right pr-3">Options</th>
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
