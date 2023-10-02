import React, { FormEvent } from "react";

import { SongProps } from "@/types";
import Form from "@/components/Form";
import { json } from "stream/consumers";


const getSong = async (id: string) => {
    const res = await fetch(process.env.BACKEND_API_BASE + "songs/" + id, {cache: 'no-store'})
    return res.json();
}

const Page = async ({ params }: { params: { id: string }}) => {
    const song: SongProps = await getSong(params.id);

    return (
        <main>
            <Form song={song}></Form>
        </main>
    );
}

export default Page;