import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Explore our diverse range of courses designed to enhance your learning
        experience.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>School Level Courses</h3>
          <p>
            Gain a solid foundation with our <b>8th, 10th, and 12th </b>standard courses. 
            Perfect for students looking to enhance their academic skills and 
            take the next step in their educational journey.
          </p>
        </div>
        <div className="course-col">
          <h3>Undergraduate Degree</h3>
          <p>
            Pursue a degree in your field of interest, with specialized programs 
            including <b>BA, BSc, BBA, B.COM, BCA, and B.LIT</b> designed to provide 
            you with essential knowledge and skills for a successful career.
          </p>
        </div>
        <div className="course-col">
          <h3>Post Graduate Programs</h3>
          <p>
            Take your career to the next level with our advanced post-graduate 
            courses including <b> MA, MSc, M.COM, MCA, MBA, CA, ICWA, and ACS</b>. 
            Gain deep expertise and position yourself as a leader in your 
            chosen domain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;