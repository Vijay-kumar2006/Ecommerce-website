import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </>
    
  )
}

export default App