'use client'

import React from "react";
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
        });
    };

    return (
        <form className="" onSubmit={onSubmit}>
            <h1 className="text-2xl text-left font-semibold pt-10 px-20">Edit song details</h1>
            <div className="flex flex-col">
                <div className="my-5 mx-20">
                    <label className="block font-bold" for="song-title">Title</label>
                    <input className="bg-midnight-100" type="text" name="title" id="song-title"defaultValue={song.metadata.title} required/>
                </div>
                <div className="mb-5 mx-20">
                    <label className="block font-bold" for="artist-name">Artist</label>
                    <input className="bg-midnight-100" type="text" name="artist" id="artist-name" defaultValue={song.metadata.artist} required/>
                </div>
                <div className="mb-5 mx-20">
                    <button className="px-3 py-2 rounded-md opacity-80 transition duration-300 ease-in-out bg-transparent hover:opacity-100 hover:bg-midnight-150"
                            type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Form;