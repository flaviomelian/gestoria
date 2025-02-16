import React from 'react'
import './Footer.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Soluciones Mendoza y asociados SL &copy;</h2>
        <div className='ankles'>
            <a className='ankle-footer' href='https://www.linkedin.com/in/flavio-melian-973308273/'>
                <img className='img-footer' src={linkedin}/>
            </a>
            <a  className='ankle-footer' href='https://github.com/flaviomelian'>
                <img className='img-footer' src={github}/>
            </a>
        </div>
    </div>
  )
}

export default Footer
