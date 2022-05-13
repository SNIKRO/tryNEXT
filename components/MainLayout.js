import Link from 'next/link'
import Head from 'next/head';

export  function MainLayout({children, title = "NEXT APP"}) {
  return(
    <>
    <Head>
      <title>{title}|NEXT TEST</title>
      <meta name='keywords' content='next, javascript, nextjs, react' />
      <meta name='description' content='tets work on next' />
      <meta charSet='utf-8' />
    </Head>
      <nav>
        <h1>NAVIGATION</h1>
          <Link href={'/about'}><a>About</a></Link>
          <Link href={'/posts'}><a>Posts</a></Link>
          <Link href={'/'}><a>Home</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`

      h1 {
        color: #fff;
      }

      nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      nav a {
        color: #fff;
        text-decoration: none;
      }

      main {
        margin-top: 60px;
        padding: 1rm;
      }

      `}</style>
    </>
  )
}
