import "./Campus.css";

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Campuses</h1>
      <p>Join us at one of our vibrant campuses and immerse yourself in a transformative learning experience.</p>
      <div className="row">
        <div className="campus-col">
         <img src="/images/london.png" alt="" />
          <div className="layer">
            <h3>Surandai</h3>
          </div>
        </div>

        <div className="campus-col">
           <img src="/images/newyork.png" alt="" />
          <div className="layer">
            <h3>Pavoorchatram</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
