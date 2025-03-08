import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LeftCard from './routes/LeftCard'
import RightCard from './routes/RightCard'
import MiddleCard from './routes/MiddleCard'
import BottomCard from './routes/BottomCard'
import NavCard from './routes/NavCard'
import './App.css'
import P1 from './container/P1'
import P11 from './context/P11'
const App = () => {
  return (
    <div>
      <NavCard />
      <Routes>
        <Route path='/leftcard' element={<LeftCard />} />
        <Route path='/rightcard' element={<RightCard />} />
        <Route path='/middlecard' element={<MiddleCard />} />
        <Route path='/bottomcard' element={<BottomCard />} />
        <Route path='/p1' element={<P1 />} />
        <Route path='/p11' element={<P11 />} />

      </Routes>

    </div>
  )
}

export default App
