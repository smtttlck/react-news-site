import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Special from './pages/special/Special'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/special/:theme' element={<Special />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
