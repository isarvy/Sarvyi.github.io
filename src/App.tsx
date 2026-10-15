import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Writing } from './components/Writing'
import { BlogPost } from './pages/BlogPost'

function Landing() {
  return (
    <>
      <Home />
      <Services />
      <Portfolio />
      <Skills />
      <Experience />
      <Certificates />
      <About />
      <Writing />
      <Contact />
    </>
  )
}

// Support /#section links coming from other routes, and reset scroll on route change.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  )
}
