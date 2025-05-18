import "./ContactComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axios from "axios";

const ContactComponent = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;
    const phonenumber = form.current.number.value;

    const fullMessage = `From: ${name}\nEmail: ${email}\nSubject: ${message}\nCell No: ${phonenumber}`;

    setSending(true);

    try {
      const response = await axios.post("https://mail-sender-endpoint.onrender.com/send-email", {
        to: "tutorialbharathmatha@gmail.com",
        subject: subject,
        text: fullMessage,
      });

      if (response.status === 200) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setSending(false);
    }
  };

  return (
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
              <h5>+91 8695334490</h5>
              <p>Monday to Saturday, 9AM to 7PM</p>
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>
              <h5>tutorialbharathmatha@gmail.com</h5>
              <p>Email us for any queries</p>
            </span>
          </div>
        </div>

        <div className="contact-col">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <input type="number" name="number" placeholder="Enter your phone number" required />
            <textarea name="message" rows="8" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
