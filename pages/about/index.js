import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';


export default function About() {

const clickHandler = () => {
  Router.push('/')
}

  return (
  <MainLayout title='ABOUT PAGE'>
    <h1>About Pages</h1>
    <button onClick={clickHandler}>Go back home</button>
  </MainLayout>  
  )
}
