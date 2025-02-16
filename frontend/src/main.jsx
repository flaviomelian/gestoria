import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Gestion from './Pages/Gestion/Gestion.jsx'
import CrearBD from './Pages/CrearBD/CrearBD.jsx';
import AbrirBD from './Pages/AbrirBD/AbrirBD.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> 
          <Route path="gestion" element={<Gestion />} /> 
          <Route path="crearBD" element={<CrearBD />} /> 
          <Route path="abrirBD" element={<AbrirBD />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
