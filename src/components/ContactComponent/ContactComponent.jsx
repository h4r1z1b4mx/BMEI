import "./ContactComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>
                <h5>Bharat Matha Tutorial, Main Building</h5>
                <p>Surandai, Tenkasi, Tamil Nadu, IN</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>
                <h5>+91 9442929986</h5>
                <p>Monday to Saturday, 9AM to 7PM</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>
                <h5>info@bharatmatha.com</h5>
                <p>Email us for any queries</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
