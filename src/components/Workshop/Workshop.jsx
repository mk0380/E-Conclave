import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './workshop.css'

function Workshop() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="workshop" id="workshop">
      <h1
        style={{ "font-family": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        WORKSHOP
      </h1>
      <div
        className="cards"
        style={{ "font-family": "'Montserrat', sans-serif" }}
      >
        <div className="card" data-aos="fade-right" data-aos-delay="700" data-tilt>
          <p>Early Entrance</p>
          <p>Front Seat</p>
          <p>Complementary Drinks</p>
          <p>Promo Gift</p>
          <a href="">Register</a>
        </div>
        <div className="card" data-aos="fade-left" data-aos-delay="700">
          <p>Early Entrance</p>
          <p>Front Seat</p>
          <p>Complementary Drinks</p>
          <p>Promo Gift</p>
          <a href="">Register</a>
        </div>
      </div>
    </section>
  );
}

export default Workshop;
