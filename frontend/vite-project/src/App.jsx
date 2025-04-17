import React from 'react'
import Navbar from './Componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Componets/Footer'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App