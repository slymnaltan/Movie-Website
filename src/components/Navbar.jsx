import React from 'react'
import { Link } from 'react-router-dom'
import '../style/home.css'
import siyah from '../disney-image/siyahlogo.jpeg';
import pembe from '../disney-image/pembelogo.jpeg';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <img style={{width:'80px',borderRadius:'10px'}} src={siyah} alt="Logo" className="navbar-logo" />
          <h3 style={{fontSize:'1.6rem'}}>CINE TOWER</h3>
        </div>
        <ul className="navbar-links">
          <Link className='link' to="/" >HOME</Link>
          <Link className='link' to="/netflix" >NETFLIX</Link>
          <Link className='link' to="/disney" >DISNEY-PLUS</Link>
          <Link className='link' to="/amazon" >AMAZON-PRIME</Link>
          <Link className='link' to="/about" >ABOUT</Link>
        </ul>
        <Link to="/login" className="navbar-login">Login</Link>
      </nav>
    </div>
  )
}

export default Navbar