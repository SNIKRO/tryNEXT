import { useRouter } from "next/router"
import Link from 'next/link'
import { MainLayout } from "../../components/MainLayout"

export default function Post({ post }) {


  //const router = useRouter()


  return(
    <MainLayout>
      <h1>{post.title}</h1>
      <div>
        {post.body}
      </div>
      <Link href={'/posts'}><a>See all posts</a></Link>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  // if(!ctx.req){
  //   return { post }
  // }
  const response = await fetch(`http://localhost:4200/post/${ctx.query.id}`)
  const post = await response.json()
  return {
    post
  }
}