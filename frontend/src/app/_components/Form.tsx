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
        <main>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" defaultValue={song.metadata.title} required/>
                <input type="text" name="artist" defaultValue={song.metadata.artist} required/>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Form;