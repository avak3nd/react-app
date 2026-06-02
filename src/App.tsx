import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import ToTheTop from './layouts/ToTheTop'
import ScrollToTop from './layouts/ScrollToTop'

import Home from './pages/main/Home'
import News from './pages/main/News'
import Browse from './pages/main/Browse'

import New from './pages/New'
import Sales from './pages/Sales'
import Free from './pages/Free'
import NewReleases from './pages/NewReleases'
import Trending from './pages/Trending'
import Popular from './pages/Popular'

import Product from './pages/Product'

function App() {
  return (
    <div className="bg-neutral-950 h-full px-5">
      <Navbar />
      <ScrollToTop />
      <ToTheTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/news" element={<News />} />

        <Route path="/discover-something-new" element={<New />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/free-games" element={<Free />} />
        <Route path="/top-new-releases" element={<NewReleases />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/most-popular" element={<Popular />} />

        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
