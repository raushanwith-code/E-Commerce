import React from 'react'
import './App.css';
import Navbar from './Componentes/Navbar/Navbar'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Componentes/pages/Shop';
import ShopCategory from './Componentes/pages/ShopCategory';
import product from './Componentes/pages/product';
import Cart from './Componentes/pages/Cart';
import LoginSignup from './Componentes/pages/LoginSignup';
import Footer from './Componentes/Footer/Footer';
import men_banner from './Componentes/Assets/banner_mens.png'
import women_banner from './Componentes/Assets/banner_women.png'
import kid_banner from './Componentes/Assets/banner_kids.png'


function App() {
  return (
    
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory banner={men_banner}category="mens"/>}/>
    <Route path='/womens' element={<ShopCategory banner={women_banner}category="woman"/>}/>
    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
    <Route path="product" element={<product/>}>
    <Route path=':productId' element={<product/>}/>
    </Route>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App