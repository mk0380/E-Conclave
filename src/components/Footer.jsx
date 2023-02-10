import React, { useEffect } from "react";
import Logo from "./img/logo2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="logo" data-aos="fade-up" data-aos-delay="300">
          <img src={Logo} alt="logo" />
        </div>
        <br />
        <hr data-aos="fade-up" data-aos-delay="300" />
        <br />
        <div className="links" style={{ color: "white" }}>
          <a
            href="https://www.instagram.com/techkriti.iitk/?hl=en"
            target={"_blank"}
          >
            <i
              className="fa fa-instagram"
              data-aos="zoom-in"
              data-aos-delay="700"
            ></i>
          </a>
          <a href="https://www.facebook.com/techkriti.iitk/" target={"_blank"}>
            <i
              className="fa fa-facebook"
              data-aos="zoom-in"
              data-aos-delay="900"
            ></i>
          </a>
          <a
            href="https://www.youtube.com/c/techkritiiitkanpur"
            target={"_blank"}
          >
            <i
              className="fa fa-youtube"
              data-aos="zoom-in"
              data-aos-delay="1100"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/school/techkriti-iitk/?originalSubdomain=in"
            target={"_blank"}
          >
            <i
              className="fa fa-linkedin"
              data-aos="zoom-in"
              data-aos-delay="1300"
            ></i>
          </a>
          <a
            href="https://twitter.com/techkriti_iitk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target={"_blank"}
          >
            <i
              className="fa fa-twitter"
              data-aos="zoom-in"
              data-aos-delay="1500"
            ></i>
          </a>
        </div>
        <br />
        <hr
          style={{ width: "100%" }}
          data-aos="fade-up"
          data-aos-delay="1500"
        />
        <p
          style={{
            width: "100%",
            margin: "15px auto",
            color: "white",
            "font-family": "'Montserrat', sans-serif",
          }}
          data-aos="fade-up"
          data-aos-delay="1700"
        >
          Copyright © 2022-23 All Rights Reserved by TECHKRITI-IITK.
        </p>
      </footer>
    </>
  );
}

export default Footer;
