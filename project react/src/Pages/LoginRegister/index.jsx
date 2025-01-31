import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRegisterPage() {
  const [pageType,setPageType]=useState("login")
  const handlePageType=()=>{
    setPageType(pageType === "login" ? "register": "login")
  }
  return (
    <>
    <div style={{height:"80vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
    {pageType === "login" ? (<Login handlePageType={handlePageType}/>) : (<Register handlePageType={handlePageType}/>)}

    </div>
    </>
    )
}
