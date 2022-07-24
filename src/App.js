import React,{useState , useEffect}from "react"
import Header from "./Component/Header"
import Photo from "./Page/Photo"
import { Routes ,Route } from 'react-router-dom';
import Cart from "./Page/Cart"
import "./Style.css"



function App() {
    return (
        <>
            <Header />
        <Routes>
             <Route exact path="/" element={<Photo/>} />
             <Route  path="/cart" element={<Cart />} />
        </Routes>
       
        </>
    )
}

export default App