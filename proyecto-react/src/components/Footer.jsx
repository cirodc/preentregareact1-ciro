import React from 'react'

const Footer = () => {
  return (
    <div className='footerMain'>
        <nav className='footerNav'>
            <ul className='footerNav'>
                <li className='footerLinks'><a className='nav-link1' href="#">Inicio</a></li>
                <li className='footerLinks'><a className='nav-link1' href="#">Modelos</a></li>
                <img className='footerLogo' src="\images\logoInvertido.png" alt="" />
                <li className='footerLinks'><a className='nav-link1' href="#">Ubicacion</a></li>
                <li className='footerLinks'><a className='nav-link1' href="#">Contacto</a></li>
            </ul>
        </nav>
        <hr />
        <img className='footerIMG' src="\images\footer.png" alt="" />
    </div>
  )
}

export default Footer
