import {  FaInstagram, FaLinkedin,FaLinkedinIn } from 'react-icons/fa'
import  './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
     
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
        <FaLinkedinIn/>
        </li>

      </ul>
     
    </footer>
  )
}

export default Footer
