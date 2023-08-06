import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";



const about_content = {
    about: "About Us",
    title: <></>,
    service_2: <>At MacroLoop Technologies  Pvt Ltd, we vision to be the most<br/> sought
    customer - centric company providing integrated technology <br /> solutions to
    enhance the grwoth and sustainability of business and reliability <br /> on data.</>,
    btn: "get in touch"

}


const { about, title, service_title, service_1, service_2, btn } =
  about_content;
  
const AboutArea = () => {
  return (
    <>
      <div className="ptg-about dark-bg pt-120 pb-90 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="ptg-about-info pt-50">
                <div className="section-title-wraper">
                  <div className="tp-section" >
                    <span
                      className="tp-section__subtitle mb-15 shadow-none p-0 wow tpfadeUp"
                      data-wow-delay=".3s"
                      style={{color:"#0020ff"}}
                    >
                      {about}
                    </span>
                    
                    <h6
                      className="tp-section__title tp-rgb-border text-white text-uppercase mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      
                      Empowering the Future: 
     Revolutionizing Living with <TypeAnimation
       sequence={[
         'Us', 
         3000,
         'LoopTech', 
         3000,
        
       ]}
       wrapper="div"
       cursor={false}
       repeat={Infinity}
       style={{ color: "#0020FF", textDecorationLine: "underline" }}
     /> 
                      <span className="cd-words-wrapper bs-cta-wrapper">


 </span>
                      
                    </h6>
                  </div>
                </div>
                <div
                  className="ptg-about-content d-flex mb-40 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  
                  <div className="about-step-info">
                    <p>{service_2}</p>
                  </div>
                </div>
              </div>
              <br />
              <div
                className="ptg-about-btn-wrapper mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link href="/contact" className="tp-black-btn br-btn-bg-dark">
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="ptg-about-img-wrapper p-relative wow tpfadeUp">
                <Tilt
                  className="tilt-img"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={900}
                  scale={1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div
                    className="ptg-about-img"
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                    <img
                      src="/assets/img/about/pta-about-img.jpg"
                      alt="about"
                    />
                  </div>
                </Tilt>
                {/* <div className="pta-about-circle">
                  <img src="/assets/img/about/ptg-ab-circle.png" alt="circe" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
