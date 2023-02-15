import React, { useEffect } from "react";
import intro from "./worshop_data";
import Aos from "aos";
import "aos/dist/aos.css";
// import React from 'react'
// import Logo from "../img/main.jpg";
import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// import ml from './img/ml.jpg'
// import Modaltwo from './Modal/modal';
import "./workshop.css";

function Workshop() {
  useEffect(() => {
    Aos.init();
  });
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const [open, setOpen] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = useState(null);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = useState(null);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(null);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = useState(null);
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <section className="workshop" id="workshop">
      <h1
        style={{ "fontFamily": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        WORKSHOP
      </h1>
      {/* <p
        style={{ "font-family": "'Montserrat', sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        The Entrepreneurial Conclave is conducted in conjunction with the main festival.
        E- Conclave aims to bring together India’s finest minds and accentuate the ideas and developments shooting up among entrepreneurs across the world. The conclave shall emphasize the challenges of an entrepreneur, the journey from ideation to success, and planning to execution. Growth-minded entrepreneurs and investors from all over the country can come together and take their businesses to the next level.

      </p> */}
      <div className="cards" style={{ "fontFamily": "'Montserrat', sans-serif" }}>
        {intro.map((data, index) => {
          return (
            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay={data.delay}
              style={{transition:".2s all ease",display:"flex"}}
            >
              <div style={{width:"50%",margin:"2%",overflow:"hidden",}}><img src={data.image} alt="Avatar" style={{ width: "100%", height:"100%",objectFit:"cover" }} /></div>
              <div className="container">
                <h4 style={{ "fontFamily": "'Montserrat', sans-serif",marginBottom:"10px",letterSpacing:"0" }}>
                  <b>{data.heading}</b>
                </h4>
                {/* <p style={{ "font-family": "'Montserrat', sans-serif" ,textAlign:"center"}}>
                  PRIZE MONEY : ₹ 1,50,000
                </p> */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column"}}><Button
                  className="tech_btn text-white w-1/2"
                  onClick={handleOpen}
                >
                  <a className="text-green-600 hover:text-yellow-500">
                    Learn More
                  </a>
                </Button>
                <Button
                  className="tech_btn text-white w-1/2"
                  // onClick={handleOpen}
                >
                  <a className="text-green-600 hover:text-yellow-500">
                    Register
                  </a>
                </Button></div>
                <Modal
                  // className='backdrop-blur-sm'
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  {/* <Box className="box text-gray-600 body-font overflow-hidden"> */}
                  <div className="center">
                    <div className="cont">
                      <div className="image_div">
                        <img class="modal_img" src={data.image} />
                      </div>
                      <div
                        className="content"
                        style={{ padding: "0 10px", color: "white" }}
                      >
                        <h1
                          class="text-white text-3xl title-font font-medium mb-1"
                          style={{ fontSize: "45px" }}
                        >
                          {data.heading}
                        </h1>
                        <br />

                        <p
                          class="leading-relaxed text-white"
                          style={{ fontSize: "18px" }}
                        >
                          {data.para}
                        </p>
                        <br />

                        <Button
                          className="w-full mt-20"
                          style={{ height: "30px", width: "30px",overflow:"hidden" }}
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* </Box> */}
                </Modal>
                {/* <br /> */}
                {/* <br /> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Workshop;
