import { useEffect, useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import Main1 from './Components/Main1'
import Products from './Components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Seriesdata from './Api/Seriesdata'
import Discount from './Components/Discount'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Statistics from './Components/Statistics'
import Settings from './Components/Settings'
import ImageCarousel from './Components/ImageCarousel'
import Register from './Components/Register'
import Login from './Components/Login'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import PageDiscount from './Components/PageDiscount'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import Privacypolicy from './Components/Privacypolicy'
import Data from './Api/Data.json'
import AddCart from './Components/AddCart'
import TermsConditions from './Components/TermsConditions'



function App() {

  return (
    <>

{/* <Navbar/> */}
    
  
   <BrowserRouter>
   <Routes>
   
    <Route path='/' element={<Main1/>}/>
    <Route path='navbar' element={<Navbar/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='seriesdata' element={<Seriesdata/>}/>
    <Route path='discount' element={<Discount/>}/>
    <Route path='satistics' element={<Statistics/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path="imagecarousel" element={<ImageCarousel/>} />
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>} />
    <Route path='footer' element={<Footer/>}/>
    <Route path='aboutus' element={<AboutUs/>}/>
    <Route path='pagediscount' element={<PageDiscount/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='faq' element={<Faq/>}/>
    <Route path='Privacypolicy' element={<Privacypolicy/>}/>
    <Route path='addcart' element={<AddCart/>}/>
    <Route path='termsconditions' element={<TermsConditions/>}/>
    
    



   </Routes>
   </BrowserRouter>
 
    </>
  )
}

export default App
