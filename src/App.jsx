import { useState } from 'react'
import Image from './components/Image'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      < Image />
      < Info />
      < About />
      < Interests />
      < Footer />
    </div>
  )
}

export default App
