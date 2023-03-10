import React, { useEffect } from "react";
import sponser from "./sponsers_data";
import Aos from "aos";
import "aos/dist/aos.css";
import './sponser.css'

function Sponsers() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="sponsers" id="partners">
      <h1
        style={{ "fontFamily": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        SPONSORS
      </h1>
      <div className="cards" style={{ "fontFamily": "'Montserrat', sans-serif" }}>
        {sponser.map((image, index) => {
          return (
            <div
              className="card" data-tilt
              data-aos="fade-right"
              data-aos-delay={image.delay}
            >
              <img src={image.logo} alt="logo" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Sponsers;
