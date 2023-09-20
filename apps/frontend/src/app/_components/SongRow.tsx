'use client'

import React from "react";
import { SongProps } from "../../types";
import Link from "next/link";
import { useRouter } from "next/router";

interface SongRowProps {
    song: SongProps;
}



const SongRow = ({song}: SongRowProps, key: React.Key) => {
    const router = useRouter();

    const handleDownload = async () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/api/files/download/' + song._id;
        }
        router.reload();
    }

    const handleSubmit = async () => {
        const res = await fetch("/api/files/" + song._id, {
            method: "DELETE"
        })
        router.reload();
    }

    const handleEdit = async () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/edit/' + song._id;
        }
    }

    return (
        <>
            <div>{song.metadata.title}</div>
            <div>{song.metadata.artist}</div>
            <div>

            <button onClick={ handleDownload }>
                <img src="icons/download.svg" alt="Download" 
                    className="h-6 w-6 text-gray-500"/>
            </button>

            <button onClick={ handleEdit }>
                <img src="icons/edit.svg" alt="Edit" 
                            className="ml-3 h-6 w-6 text-gray-500"/>
            </button>

            <button onClick={ handleSubmit }>
                <img src="icons/trash.svg" alt="Delete" className="ml-3 h-6 w-6 text-gray-500"/>
            </button>

            </div>
        </>
    );
};

export default SongRow;