import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './layouts/Navbar'

import Home from './pages/main/Home'
import News from './pages/main/News'
import Browse from './pages/main/Browse'
import New from './pages/New'
import Product from './pages/Product'

function App() {
  return (
    <div className="bg-neutral-950 h-full px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/news" element={<News />} />
        <Route path="/discover-something-new" element={<New />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
