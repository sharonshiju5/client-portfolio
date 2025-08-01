import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TattooArtist404 from './components/404/pagenotfound'
import Works from './components/works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<MainLayout />} />
          <Route path="/contatct" element={<MainLayout />} />
          <Route path="*" element={<TattooArtist404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
