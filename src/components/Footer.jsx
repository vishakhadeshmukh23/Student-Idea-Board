import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="social-icons">
        <a href="#"><IoLogoYoutube /></a>
        <a href="#"><FaInstagram /></a>
        <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>
         <a href="https://www.linkedin.com/in/vishakha-deshmukh-860180326/"><FaLinkedin /></a>
      </div>

      <div className="copyright">
        © 2026 Student Idea Board
      </div>
    </footer>
  );
};

export default Footer;


