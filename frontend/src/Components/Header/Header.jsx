import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import house from '../../assets/casita.png'
import gestion from '../../assets/gestion.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <Link to='/'>
                <img className='house' src={house}/>
            </Link>
        </div>
        <div>
            <Link to='/gestion'>
                <img className='management' src={gestion}/>
            </Link>
        </div>
    </div>
  )
}

export default Header
