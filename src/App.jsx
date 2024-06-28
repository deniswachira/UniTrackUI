// import './App.css'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Courses from './pages/Courses'
import Universities from './pages/Universities'
import CalculatePoints from './pages/CalculatePoints'
import { useContext } from "react";
import { Context } from "./context/Context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const { user } = useContext(Context);
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="testimonial" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="user_profile" element={user ? <Profile /> : <Home />} />
            <Route path="courses" element={user ? < Courses /> : <Home />} />
            <Route path="universities" element={<Universities />} />
            <Route path="calculate" element={user ? <CalculatePoints /> : <Home />} />
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
        </QueryClientProvider>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
