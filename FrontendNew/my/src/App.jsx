import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './page/Home'
import { ProductForm } from './Components/Productform'
import { Productcardseller } from './Components/productcardforseller'


function App() {
 
 return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
   <Route path='/productform' element={<ProductForm/>}/>
   <Route path='/my-product' element={<Productcardseller/>}/>
    </Routes>
    </>
    
  )
}

export default App