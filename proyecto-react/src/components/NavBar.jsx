import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Carrito from './Carrito'
import categories from '../data/categorias.json'

const NavBar = () => {


  window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("bajar", this.window.scrollY > 0);
  })

  return (
      <header className='header'>
        <img src="\images\logoInvertido.png" alt="logo" className='imgLogo' />
        <nav className='nav'>
            <ul className='navBar'>
                <li><NavLink to="/" className="nav-link">Inicio</NavLink></li>
                {
                  categories.map((category) => {
                    return ( 
                      <li>
                        <NavLink to={`/category/${category.id}`} className="nav-link">{category.nombre}</NavLink>
                      </li>
                    )

                  })
                }
            </ul>
        </nav>
        <Carrito />
      </header>
  )
}

export default NavBar
