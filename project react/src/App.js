import React, { useState } from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import LoginRegisterPage from './Pages/LoginRegister'
import ProductDetails from './Pages/ProductDetials'
import PageNotFound from './Pages/404'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AuthContext from './utils/AuthContext'
import Cart from './Pages/Cart'


export default function App() {
  const [token,setToken]=useState("hi")
  const handleLogin=(e)=>{
    setToken(e)
  }
  return (
    <>
<AuthContext.Provider value={{token,handleLogin}}>
  <Navbar />
  <main style={{minHeight:'80vh'}}>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/login-register" element={token?<Navigate to={"/"}/>:<LoginRegisterPage/>} />
    <Route path="/Product-details/:id/:name" element={token?<ProductDetails/>:<Navigate to={"/login-register"}/> }/>
    <Route path="/cart" element={token?<Cart/>:<Navigate to={"/login-register"}/> }/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </main>
  <Footer/>
</AuthContext.Provider>
    </>
  )
}
