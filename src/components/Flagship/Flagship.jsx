import React from 'react'
import './flagship.css'
// import Logo from '../img/intro.jpg'
// import Aos from 'aos'
// import './'


function Flagship() {
    return (
        <section className='flagship' id='flagship' style={{minHeight:"100vh"}}>
            <h1
                style={{ "font-family": "'Montserrat', sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="300"
            >
                FLAGSHIP EVENTS
            </h1>
            <br />
            <div  className='expo' data-aos="fade-up"
                data-aos-delay="300">
            <h3 
                style={{ "font-family": "'Montserrat', sans-serif" }}
                
            >
              <a href="" style={{textDecoration:"none",color:"white"}}>  STARTUP <span >EXPO</span> </a>
            </h3></div>
            <br /><br />
            <p
                style={{ "font-family": "'Montserrat', sans-serif", margin: "5px auto",lineHeight:"25px",overflow:"hidden", textAlign:"center",
                fontSize:"22px" }}
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Dates : <span>24th- 25th March 2023</span>
            </p>

            <p
                style={{ "font-family": "'Montserrat', sans-serif", marginBottom: "1px",lineHeight:"25px",overflow:"hidden" }}
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Techkriti’s Start-up Expo will help budding entrepreneurs find their niche, showcase their ideas, and provide a platform for startups to showcase their innovative products to the world. It will also offer an excellent opportunity to interact with eminent guest speakers, who are the leaders in their domains, and receive their valuable suggestions giving you the flexibility to manoeuvre and a competitive edge. Moreover, it aims to bring together passionate entrepreneurs in one place to share creative ideas, get unparalleled exposure, and foster entrepreneurial excellence.
            </p>
            <br />

            {/* <h3  data-aos="fade-up"
                data-aos-delay="300" style={{ "font-family": "'Montserrat', sans-serif","textTransform":"uppercase",fontSize:"30px" }}> our <span>angel investors</span> and 
            <span> Venture Capitalists</span></h3>
             <br />
            <div  data-aos="fade-up"
                data-aos-delay="300"style={{border:"2px solid red",display:"flex",flexWrap:"wrap"}}>
               <div style={{height:"250px",width:"250px"}}>

               </div>
            </div>
             */}
        </section>
    )
}

export default Flagship