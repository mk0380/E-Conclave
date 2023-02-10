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
        style={{ "font-family": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        SPEAKERS
      </h1>
      <p style={{ "font-family": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300">Talks of entrepreneurial conclave shall give deep insight into the journey of entrepreneurship. The renowned speakers and entrepreneurs shall deliver talks on a multitude of topics to foster, nurture and stimulate the entrepreneurial atmosphere for the budding entrepreneurs and the novices to the entrepreneurial world. Technologies of tomorrow shall be inspired by the talks as the startups of tomorrow are building blocks of better society, economy and government.
      </p>
      <div className="slider"      >
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
