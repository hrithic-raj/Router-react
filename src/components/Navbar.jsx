import React from 'react'
import logo from '../img/logo.png';
function Navbar() {
  return (
    <div className='nav_main'>
        <div className="nav_left">
            <img src={logo} alt='logo' />
        </div>
        {/* <div className="nav_right">
            <li><a href={<Navbar/>}>Home</a></li>
            <li><a href={<Navbar/>}>About</a></li>
            <li><a href={<Navbar/>}>Contact-us</a></li>
        </div> */}
    </div>
  )
}

export default Navbar