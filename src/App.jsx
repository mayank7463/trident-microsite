import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Environment from './pages/Environment'
import LandingPage from './pages/LandingPage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Mapping from './pages/Mapping'
import Diverse from './pages/Diverse'
import Message from './pages/Message'
import Legacy from './pages/Legacy'
import Financial from './pages/Financial'
import International from './pages/International'
import Trends from './pages/Trends'
import Paper from './pages/Paper'
import Social from './pages/Social'
import WeavingExcellence from './pages/WeavingExcellence'
import BOD from './pages/BOD'
import Excellence from './pages/Excellence'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div>
          <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/weaving-excellence' element={<WeavingExcellence/>}/>
                    <Route path='/expansive-footprint' element={<Mapping/>}/>
                    <Route path='/diverse-segments' element={<Diverse/>}/>
                    <Route path='/chair-message' element={<Message/>}/>
                    <Route path='/enduring-legacy' element={<Legacy/>}/>
                    <Route path='/financial-Highlights' element={<Financial/>}/>
                    <Route path='/leading-international' element={<International/>}/>
                    <Route path='/macroeconomic-trends' element={<Trends/>}/>
                    <Route path='/paper-brands' element={<Paper/>}/>
                    <Route path='/social' element={<Social/>}/>
                    <Route path='/bod' element={<BOD/>}/>
                    <Route path='/macroeconomic-trends' element={<Trends/>}/>
                    <Route path='/excellence' element={<Excellence/>}/>
                    <Route path='/environment' element={<Environment/>}/>
                   
                    
          </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
 </>
  )
}

export default App

