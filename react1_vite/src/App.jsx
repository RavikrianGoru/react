import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LeftCard from './routes/LeftCard'
import RightCard from './routes/RightCard'
import MiddleCard from './routes/MiddleCard'
import BottomCard from './routes/BottomCard'
import NavCard from './routes/NavCard'
import './App.css'
const App = () => {
  return (
    <div>
      <NavCard />
      <Routes>
        <Route path='/leftcard' element={<LeftCard />} />
        <Route path='/rightcard' element={<RightCard />} />
        <Route path='/middlecard' element={<MiddleCard />} />
        <Route path='/bottomcard' element={<BottomCard />} />
      </Routes>

    </div>
  )
}

export default App
