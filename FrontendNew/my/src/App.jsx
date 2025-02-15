import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './page/Home'
import { ProductForm } from './Components/Productform'
import { Productcardseller } from './Components/productcardforseller'
import Navbar from './Components/Navbar'


function App() {
 
 return (
    <>
      <Navbar/>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     <Route path='/productform' element={<ProductForm/>}/>
     <Route path='/my-product' element={<Productcardseller/>}/>
    </Routes>
  </Router>
    </>

   
    
    
  )
}

export default App