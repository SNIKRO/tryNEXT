import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';


export default function About( { title }) {

const clickHandler = () => {
  Router.push('/')
}

  return (
  <MainLayout title='ABOUT PAGE'>
    <h1>{title}</h1>
    <button onClick={clickHandler}>Go back home</button>
  </MainLayout>  
  )
}


About.getInitialProps = async () => {

  const response = await fetch('http://localhost:4200/about')  
  const data = await response.json()
  
  return {title: data.title}

}