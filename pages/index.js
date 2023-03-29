import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Welcome to Game Night!</h1>  
      <p>What should we play tonight?</p>
      <Link href="/about">Check out my About Page</Link>
    </>
  )
}