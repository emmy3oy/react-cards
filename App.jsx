import './App.css'
import Card from './Rating/card'
import Frame from './Frame'
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
