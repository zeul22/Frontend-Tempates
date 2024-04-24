import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default App
