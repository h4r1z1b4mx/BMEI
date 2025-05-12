import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Bharath Mata Educational Institution</h4>
      <p>
        Dedicated to educational excellence, Bharath Mata Educational Institute is 
        committed to empowering students across various academic levels. From 
        school students to postgraduate learners, we provide comprehensive 
        coaching that goes beyond traditional teaching. Our mission is to 
        nurture potential, build confidence, and guide students towards 
        academic success and personal growth. With experienced faculty and 
        personalized learning approaches, we transform educational challenges 
        into opportunities for learning and achievement.
      </p>
      
      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>
      
      <p>
        Contact Us: 94429 29986 | 94893 31790
      </p>
      
      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="fa-heart" /> by  Bharath Mata Educational Institution
      </p>
    </section>
  );
};

export default Footer;