import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social_list">
        <a href="https://www.instagram.com/danielborggs/" target="_blank">
          <li>
            <FaInstagram />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/daniel-fborges/" target="_blank">
          <li>
            <FaLinkedin />
          </li>
        </a>
        <a href="https://github.com/DanteBorges" target="_blank">
          <li>
            <FaGithub  />
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
