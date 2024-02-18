import { color } from "framer-motion";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";



const about_content = {
  about: "About Us",
  title: <></>,

  btn: "get in touch"

}


const { about, title, service_title, service_1, service_2, btn } =
  about_content;

const AboutArea = () => {
  return (
    <>
      <div className="ptg-about dark-bg pt-120 pb-90 p-relative">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-4 col-lg-5 ms-lg-5">
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
            <div className="col-xl-6 col-lg-5">
              <div className="ptg-about-info pt-50">
                <div className="section-title-wraper">
                  <div className="tp-section" >
                    <span
                      className="tp-section__subtitle mb-15 shadow-none p-0 wow tpfadeUp"
                      data-wow-delay=".3s"
                      style={{ color: "#044CBC" }}
                    >
                      {about}
                    </span>

                    <h6
                      className="tp-section__title tp-rgb-border text-black text-uppercase mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >


                      Empowering the Future:
                      Revolutionizing Living With
                      Upscale Living With Technology
                      <span className="cd-words-wrapper bs-cta-wrapper">


                      </span>

                    </h6>
                  </div>
                </div>
               
              </div>
              <br />
              <div
                className="ptg-about-btn-wrapper mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link href="/contact" className="tp-black-btn">
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
