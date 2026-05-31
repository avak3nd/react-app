import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <div className="bg-neutral-950 h-screen px-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
