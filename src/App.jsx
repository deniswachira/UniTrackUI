// import './App.css'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HowItWorks from './pages/HowItWorks'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import Profile from './pages/Profile'
function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Features />} />
          {/* <Route path="how-it-works" element={<HowItWorks />} /> */}
          <Route path="testimonial" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={
            <div className="shadow-lg grid place-self-center mt-20 py-20 w-3/4 mx-auto text-white  justify-center text-center">
              <p className="text-5xl pt-3 m-3">😮404😮</p>
              <p className="text-lg  m-2">There's nothing here!</p>
              <Link className="btn btn-accent text-2xl" to="/">
                🏡Home
              </Link>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
