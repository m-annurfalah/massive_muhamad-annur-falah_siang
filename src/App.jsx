import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Invitation from './components/Invitation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Router>
        <Routes>
          <Route to="/" element={<Invitation />} />
        </Routes>
      </Router> */}
      <div>
        <Invitation />
      </div>
    </>
  )
}

export default App
