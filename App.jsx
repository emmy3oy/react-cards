import './App.css'
import Homepage from './Rating/card'
import Homepage from './Frame'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Card />} />
        <Route exact path='/frame' element={<Frame />} />
        
      </Routes>
    </>
  );
}

export default App
