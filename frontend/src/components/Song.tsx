import React from "react";
import { SongModel } from "../types";

interface SongProps {
    song: SongModel;
}

const Song = ({song}: SongProps) => (
    <li className="mb-6">
        <h2 className="text-xl font-semibold">{song.metadata.title}</h2>
        <p className="text-gray-600">{song.metadata.artist}</p>
        <a href={`/api/download/${song._id}`}>Download</a>
    </li>
);

export default Song;