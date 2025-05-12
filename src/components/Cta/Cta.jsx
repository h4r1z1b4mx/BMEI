import { Link } from "react-router-dom";

import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <h1>
        Enroll in Our Diverse Online Courses
        <br />
        From Anywhere Around the Globe
      </h1>
      <Link to="/contact" className="hero-btn">
        GET IN TOUCH
      </Link>
    </section>
  );
};

export default Cta;
