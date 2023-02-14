import React from "react";
import "./contact.css";
import amit from './amit.jpg'
import aditya from './aditya.jpg'
import aakarsh from './aakarsh.jpg'
import bugata from './bugata.jpeg'
import divya from './divya.jpg'
import harsh from './harsh.jpg'
import parth from './parth.jpeg'
import sanober from './sanober.jpeg'
import vikas from './vikas.jpg'

export default function Contactus() {
  return (
    <>
      <section className="contact" id="contact">
        <h1
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          CONTACT US
        </h1>
        <br />
        <div
          className="cards"
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>
            ORGANIZERS <span>E-CONCLAVE</span>
          </h3>
          <div className="inner-card">
            <div className="card">
              <div className="image">
                <img src={harsh} alt="" />
              </div>
              <div className="text">
                <p className="name">Harsh Pandey </p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 8290470307</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ harshp22@iitk.ac.in</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/harshp22" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/_.._harsh.../" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={vikas} alt="" />
              </div>
              <div className="text">
                <p className="name">Vikas Nakwal</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 7014195533</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ vkvikas1110@gmail.com</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/vikas-nakwal-a59aa4211" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/vikas.nakwal.11102308?mibextid=ZbWKwL" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={sanober} alt="" />
              </div>
              <div className="text">
                <p className="name">Sanober Ali</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 9541741362</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ asanober94@gmail.com</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/sanober-ali-2a8794214/" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/sanober.ali.9277?mibextid=LQQJ4d" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h3 style={{ "font-family": "'Montserrat', sans-serif" }}>
          <span>COMPETITIONS</span>
        </h3>
        <div
          className="cards"
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>
            FINTECH <span>EVENTS</span>
          </h3>
          <div className="inner-card">
          <div className="card">
              <div className="image">
                <img src={divya} alt="" />
              </div>
              <div className="text">
                <p className="name">Divya m</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 7034516462</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ divya20@iitk.ac.in</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/divya-m-3ba91220b" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/selvi.murugan.161214?mibextid=ZbWKwL" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cards"
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>
            BUSINESS <span>EVENTS</span>
          </h3>
          <div className="inner-card">
          <div className="card">
              <div className="image">
                <img src={bugata} alt="" />
              </div>
              <div className="text">
                <p className="name">Bugada Ashritha </p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 8309335762</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ bugada20@iitk.ac.in </i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/bugada-ashritha-90063a208/" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/ashritha.bugada" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={parth} alt="" />
              </div>
              <div className="text">
                <p className="name">Parth Sharma</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 9657728280</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ parths20@iitk.ac.in</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/parth-sharma-b2a168217/" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100057727264308" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={aakarsh} alt="" />
              </div>
              <div className="text">
                <p className="name">Aakarsh Mittal</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 9627568555</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ amittal20@iitk.ac.in</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/aakarsh-mittal-b4a81620b/" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100008119605196" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cards"
          style={{ "font-family": "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>
            ENTREPRENEURIAL <span>EVENTS</span>
          </h3>
          <div className="inner-card">
          <div className="card">
              <div className="image">
                <img src={aditya} alt="Logo" />
              </div>
              <div className="text">
                <p className="name">Aditya Kushwaha</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎9452522758</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ adi.nitesh05@gmail.com</i>
                </p>
              </div>
              <div className="links">
                <a href="https://in.linkedin.com/in/aditya-kushwaha-bbb390211" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100056240262956" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={amit} alt="" />
              </div>
              <div className="text">
                <p className="name">Amit Kumar</p>
                <p className="no">
                  <i className="fa fa-phone">‎ ‎ ‎ 8740938236</i>
                </p>
                <p className="email">
                  <i className="fa fa-envelope">‎ ‎ ‎ amitkumarsk588@gmail.com</i>
                </p>
              </div>
              <div className="links">
                <a href="https://www.linkedin.com/in/amit-kumar-948968224/" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100024353644420" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
