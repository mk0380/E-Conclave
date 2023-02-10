import React, { useEffect } from "react";
import speakers from "./speaker_data";
import Aos from "aos";
import "aos/dist/aos.css";

function Speaker() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="speakers" id="speakers">
      <h1
        style={{ "font-family": "'Inter', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        SPEAKERS
      </h1>
      <div className="slider">
        <div className="slide-track">
          {speakers.map((data, index) => {
            return (
              <div className="slide">
                <img src={data.img} alt="image" />
                <div className="text">
                  <h2 style={{ "font-family": "'Montserrat', sans-serif" }}>
                    {data.name}
                  </h2>
                  <p style={{ "font-family": "'Inter', sans-serif" }}>
                    {data.work}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Speaker;
