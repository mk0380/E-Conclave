import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './schedule.css'

function Schedule() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="schedule" id="schedule">
      <h1
        style={{ "fontFamily": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        SCHEDULE
      </h1>
      <div className="btn" data-aos="fade-up" data-aos-delay="300">
        <a href="" style={{ "fontFamily": "'Montserrat', sans-serif" }}>
          Check Here
        </a>
      </div>
    </section>
  );
}

export default Schedule;
