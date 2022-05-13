import Router from 'next/router';


export default function About() {

const clickHandler = () => {
  Router.push('/')
}

  return (
  <>
    <h1>About Pages</h1>

    <button onClick={clickHandler}>Go back home</button>
  </>  
  )
}
