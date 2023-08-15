import Link from 'next/link'
import React from 'react'

export default function Viewer() {
    return (
        <main>
            <h1>Viewer</h1>
            <Link href="/">Go to home page</Link>
            <br />
            <Link href="/viewer">Go to this page</Link>
        </main>
    )
}