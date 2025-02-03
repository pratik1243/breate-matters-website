import React from 'react'
import brandLogo from '../assets/images/brand-logo.png';

const Navbar = ({ navBg }) => {
  return (
    <div className={`navbar-section container ${navBg ? 'nav-bg' : ''}`}>
        <img src={brandLogo} className='nav-logo' />

        <button className='book-btn'>Book Now</button>
    </div>
  )
}

export default Navbar