'use client'

import React from "react";
import { SongProps } from "../types";
import Link from "next/link";

interface SongRowProps {
    song: SongProps;
}



const SongRow = ({song}: SongRowProps, key: React.Key) => {
    const handleDownload = async () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/api/files/download/' + song._id;
        }
    }

    return (
        <>
            <div>{song.metadata.title}</div>
            <div>{song.metadata.artist}</div>
            <button onClick={ handleDownload }>Download</button>
        </>
    );
};

export default SongRow;