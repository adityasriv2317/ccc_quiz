import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './comps/Landing/Landing';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    </Router>
  )
}

export default App
