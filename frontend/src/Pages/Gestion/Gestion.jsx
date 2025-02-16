import React from 'react'
import './Gestion.css'
import {useNavigate} from 'react-router-dom'

const Gestion = () => {

  const navigate = useNavigate()

  return (
    <div  className='management-page'>
      <h1>Gestion</h1>
      <div className='operations'>
        <button className='button' onClick={() => navigate('/crearBD')}>Crear Nueva Base de datos</button>
        <button className='button' onClick={() => navigate('/abrirBD')}>Abrir Base de datos</button>
      </div>
    </div>
  )
}

export default Gestion
