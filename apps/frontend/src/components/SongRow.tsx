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
            window.location.href = '/library';
        }
    }

    const handleEdit = async () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/edit/' + song._id;
        }
    }

    return (
        <tr className="group transition duration-300 ease-in-out">
            <td className="group-hover:bg-raisin-200 group-hover:rounded transition duration-300 ease-in-out py-3 pl-3 text-left">{song.metadata.title}</td>
            <td className="group-hover:bg-raisin-200 transition duration-300 ease-in-out py-3 text-left">{song.metadata.artist}</td>
            <td className="group-hover:bg-raisin-200 group-hover:rounded transition duration-300 ease-in-out py-3 pr-3 text-right">
                <button onClick={ handleDownload }>
                    <DownloadIcon className="w-6 h-6" />
                </button>
                <button onClick={ handleEdit }>
                    <EditIcon className="ml-3 w-6 h-6" />
                </button>
                <button onClick={ handleSubmit }>
                    <DeleteIcon className="ml-3 w-6 h-6" />
                </button>
            </td>
        </tr>
    );
};

export default SongRow;