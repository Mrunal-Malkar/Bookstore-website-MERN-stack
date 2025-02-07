import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from "./components/hero"
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
    <Footer/>
    </>
  )
}
export default App
