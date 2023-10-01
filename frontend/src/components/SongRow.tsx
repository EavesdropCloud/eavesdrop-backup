'use client'

import React from "react";
import { SongProps } from "@/types";
import Link from "next/link";

import DownloadIcon from "./icons/DownloadIcon";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";

interface SongRowProps {
    song: SongProps;
}



const SongRow = ({song}: SongRowProps, key: React.Key) => {

    const handleDownload = async () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/api/files/download/' + song._id;
        }
    }

    const handleSubmit = async () => {
        const res = await fetch("/api/files/" + song._id, {
            method: "DELETE"
        })
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
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
                    <DownloadIcon className="w-6 h-6" />
                </button>

                <button onClick={ handleEdit }>
                    <EditIcon className="ml-3 w-6 h-6" />
                </button>

                <button onClick={ handleSubmit }>
                    <DeleteIcon className="ml-3 w-6 h-6" />
                </button>

            </div>
        </>
    );
};

export default SongRow;