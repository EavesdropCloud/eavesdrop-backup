'use client'

import React from "react";
import Link from 'next/link'
import { FormEvent } from "react";

const Form = ({ song }) => {
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const res = await fetch("/api/songs/" + song._id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ metadata: {
                title: formData.get("title"),
                artist: formData.get("artist")
            }})
        })
        if (typeof window !== 'undefined') {
            window.location.href = '/library';
        };
    };

    return (
        <div className="w-1/2 h-1/2 m-20 p-5 bg-raisin-200 rounded-3xl shadow-xl">
            <h1 className="text-2xl p-3 text-left font-semibold">Edit song details</h1>
            <form className="" onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <div className="my-5 pl-10">
                        <label className="px-2 py-1 block text-sm opacity-50 font-semibold" for="song-title">Title</label>
                        <input className="w-1/2 p-2 bg-raisin-300 rounded" type="text" name="title" id="song-title"defaultValue={song.metadata.title} required/>
                    </div>
                    <div className="mb-5 pl-10">
                        <label className="px-2 py-1 block text-sm opacity-50 font-semibold" for="artist-name">Artist</label>
                        <input className="w-1/2 p-2 bg-raisin-300 rounded" type="text" name="artist" id="artist-name" defaultValue={song.metadata.artist} required/>
                    </div>
                    <div className="pl-10">
                        <button className="px-5 py-2 rounded-full opacity-80 transition duration-300 ease-in-out bg-transparent hover:opacity-100 hover:bg-pinkman"
                                type="submit">Submit</button>
                        <button className="px-5 py-2 ml-3 rounded-full opacity-80 transition duration-300 ease-in-out bg-transparent hover:opacity-100 
                                hover:bg-pinkman"><Link href="/library">Cancel</Link></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;