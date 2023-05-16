import "../styles/global.css"
import Link from "next/link"
import {useRouter} from "next/router"
import Head from "next/head"


export default function App({ Component, pageProps}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Game Night</title>
      </Head>
      <div>
       <h1>Game Night</h1>
       <nav className="header-nav">
        <ul>
          <li>
            <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>
          </li>
          <li>
            <Link className={router.pathname == "/about" ? "active" : ""} href="/about">About</Link>
          </li>
          <li>
            <Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link>
          </li>
        </ul>
       </nav>
      </div>
      
      <Component {...pageProps} />
      <div>
        <h3>Keep on Playing</h3>
      </div>
  
    </>
  )
}