import React from 'react'
import { Link } from 'react-router-dom'
import '../style/home.css'
import instagram from '../disney-image/instagram.png'
import linkedin from '../disney-image/linkedin.png'
import github from '../disney-image/github.png'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>Your one-stop destination for movies, series, and kids' content from Netflix, Disney, and Amazon.</p>
          <ul className="footer-links">
            <Link className='first-link' to="#" >Contact Us</Link>
            <Link className='first-link' to="#" >Terms of Service</Link>
            <Link className='first-link' to="#" >Privacy Policy</Link>
          </ul>
          <div className="footer-social">
            <h3>Follow or Contact with us:</h3>
            <ul>
              <Link className='second-link' to="https://www.linkedin.com">
                <img src={linkedin} alt="LinkedIn" />
              </Link>
              <Link className='second-link' to="https://www.instagram.com">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link className='second-link' to="https://www.github.com">
                <img src={github} alt="Github" />
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer