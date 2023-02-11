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
        style={{ "font-family": "'Inter', sans-serif" }}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        SCHEDULE
      </h1>
      <div className="btn" data-aos="fade-left" data-aos-delay="500">
        <a href="" style={{ "font-family": "'Montserrat', sans-serif" }}>
          Check Here
        </a>
      </div>
    </section>
  );
}

export default Schedule;
