import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return(
    <MainLayout>
    <h1 className={ classes.error }>Error 404</h1>
    <p>Return to <Link href={'/'}><a>home page</a></Link></p>
    </MainLayout>
  )
};
