import React from "react";
import { SongProps } from "../types";
import Link from "next/link";

interface SongRowProps {
    song: SongProps;
}

const SongRow = ({song}: SongRowProps) => (
    <>
        <div>{song.metadata.title}</div>
        <div>{song.metadata.artist}</div>
        <Link href={`/api/download/${song._id}`}>Download</Link>
    </>
);

export default SongRow;