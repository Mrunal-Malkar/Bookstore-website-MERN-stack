import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from "./components/hero"
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './components/store'
import Contact from './components/contact'
import NotFound from './components/notfound'
import Cart from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={<Hero />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      <Footer />
      </BrowserRouter>

    </>
  )
}
export default App
