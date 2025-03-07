import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './page/Home'
import { ProductForm } from './Components/Productform'
import { Productcardseller } from './Components/productcardforseller'
import Navbar from "./Components/Navbar";
import Singlecard from './Components/Singlecard'
import CartProduct from './Components/Cartcompo'
import { Selectaddress } from './Components/selectaddress'


function App() {
 
 return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     <Route path='/productform' element={<ProductForm/>}/>
     <Route path='/cart' element={<CartProduct/>}/>
     <Route path='/my-product' element={<Productcardseller/>}/>
     <Route path= '/product/:id' element={<Singlecard/>}/>
     <Route path = 'selcetaddress' element={<Selectaddress/>}/>
     
    </Routes>
    </>

   
    
    
  )
}

export default App