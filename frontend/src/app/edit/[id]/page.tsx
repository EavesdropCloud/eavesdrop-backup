import React from "react";

import { SongProps } from "@/types";




const getSong = async (id: string) => {
    const res = await fetch(process.env.BACKEND_API_BASE + "songs/" + id, {cache: 'no-store'})
    return res.json();
}

const Page = async ({ params }: { params: { id: string }}) => {
    const song: SongProps = await getSong(params.id);
    return (
        <main>
            <p>{song._id}</p>
        </main>
    );
}

export default Page;