import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";


function App() {



  
  return (
    
    <div className="grid-container">
      
        <BrowserRouter>
          <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
              {/* <Route path="/" /> */}
            
          </Routes>
          </Layout>
        </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;
