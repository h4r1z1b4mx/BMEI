import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Welcome to Bharat Matha Tutorial</h1>
          <p>
            Bharat Matha Tutorial is one of the most trusted coaching centers in Surandai, Tamil Nadu.
            We specialize in guiding students from school to college level with personalized support,
            experienced faculty, and proven teaching methods. Our goal is to help every student achieve academic success,
            whether it’s SSLC, HSC, or university degrees. We believe that with the right guidance, every student can shine.
          </p>
          <Link to="/courses" className="hero-btn red-btn">
            VIEW COURSES
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="About Bharat Matha Tutorial" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
