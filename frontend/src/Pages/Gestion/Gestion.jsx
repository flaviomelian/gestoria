import React from 'react'
import './Gestion.css'

const Gestion = () => {
  return (
    <div  className='management-page'>
      <h1>Gestion</h1>
      <div className='operations'>
        <button className='button' onClick={console.log("click")}>Crear Nueva Base de datos</button>
        <button className='button' onClick={console.log("click")}>Abrir Base de datos</button>
      </div>
    </div>
  )
}

export default Gestion
