import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social_list">
        <ul class="icon-list">
          <li class="icon-item">
            <a
              href="https://www.instagram.com/danielborggs/"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="icon-item">
            <a
              href="https://www.linkedin.com/in/daniel-fborges/"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="icon-item">
            <a
              href="https://github.com/DanteBorges"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
};

export default Footer;
