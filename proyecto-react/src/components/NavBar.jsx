import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
  return (
      <header className='header'>
        <img src="\images\logoInvertido.png" alt="logo" className='imgLogo' />
        <nav className='nav'>
            <ul className='navBar'>
                <li><a className='nav-link' href="#">Inicio</a></li>
                <li><a className='nav-link' href="#">Modelos</a></li>
                <li><a className='nav-link' href="#">Ubicacion</a></li>
                <li><a className='nav-link' href="#">Contacto</a></li>
            </ul>
        </nav>
        <Carrito />
      </header>
  )
}

export default NavBar
