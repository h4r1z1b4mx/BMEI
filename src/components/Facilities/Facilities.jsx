
import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Experience a world of exceptional amenities and services at our institute.</p>
      <div className="row">
        <div className="facilities-col">
         <img src="/images/library.png" alt="" />
          <h3>Tuition for 10th, 11th, 12th Students</h3>
          <p>
            Specialized coaching for 10th, 11th, and 12th standard students. 
            Comprehensive support to excel in board examinations and competitive tests.
          </p>
        </div>
        <div className="facilities-col">
           <img src="/images/basketball.png" alt="" />
          <h3>Tailoring Classes for Women</h3>
          <p>
            Empowering women through professional tailoring skills. 
            Learn cutting-edge techniques and design principles in a supportive environment.
          </p>
        </div>
        <div className="facilities-col">
        <img src="/images/cafeteria.png" alt="" />
          <h3>Special Accountancy Class for 12th Students</h3>
          <p>
            Focused accountancy coaching for 12th standard students. 
            In-depth preparation for professional accounting careers and higher education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;