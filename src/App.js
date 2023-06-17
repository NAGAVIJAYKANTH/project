import React from 'react'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Home1 from './pages/Home1'
import Register from './pages/Register'
import Login from './pages/Login'
import Navigation1 from './components/Navigation1'


function App(){ 
  return (
    <div>
    <BrowserRouter>
    <Navigation1/>
     <Routes>
     <Route path="/" element={<Register/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/Home1" element={<Home1/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  )
  
  }
  
export default App
