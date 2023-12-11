import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home'
import CompletedProjects from './pages/Projects/CompletedProjects'
import UpcomingProjects from "./pages/Projects/UpcomingProjects"
import OngoingProjects from "./pages/Projects/OngoingProjects"
import SingleProject from './pages/Projects/SingleProject'
import Contact from './pages/Contact/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About/About'
import Associates from './pages/Associates/Associates'
import Footer from './components/Footer/Footer'

function App() {
  const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "visible"
    }, [pathname]);
  }
  
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/completedprojects' element={<CompletedProjects/>}/>
        <Route path='/upcomingprojects' element={<UpcomingProjects/>}/>
        <Route path='/ongoingprojects' element={<OngoingProjects/>}/>
        <Route path='/singleproject' element={<SingleProject/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/associates' element={<Associates/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
  
    </>
  )
}

export default App
