import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href="/viewer">Go to viewer page</Link>
    <br />
      <Link href="/">Go to this page</Link>
    </main>
  )
}
