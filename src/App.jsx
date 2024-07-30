import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import LayOut from './components/LayOut/LayOut'

const routing=createBrowserRouter(
  [
  {element:<LayOut/>, children:[
    {path:"/home" , element: <Home/>},
    {path:"" , element: <Home/>},
    {path:"/about" ,element:<About/>},
    {path:"/portfolio" ,element:<Portfolio/>},
    {path:"/contact" ,element:<Contact/>},
    {path:"*",element:<h2 className='h-lvh p-32 text-center text-2xl font-semibold'> 404 | This page could not be found.</h2>}
  ]}
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={routing} > </RouterProvider>
    </>
  )
}

export default App
