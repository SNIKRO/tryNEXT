import Link from 'next/link'
import Head from 'next/head';

export default function Index() {
  return (
  <>
    <Head>
      <title>TITLE SITE</title>
      <meta name='keywords' content='next, javascript, nextjs, react' />
      <meta name='description' content='tets work on next' />
      <meta charSet='utf-8' />
    </Head>
    <h1>Hello </h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href={'/posts'}><a>Posts</a></Link></p>
  </>
  )
}