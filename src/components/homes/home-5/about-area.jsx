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
      <div className="ptg-about dark-bg pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row justify-content-around">
            <div
              className="col-lg-5 wow tpfadeUp"
              data-tilt=""
              data-tilt-perspective="2000"
              data-wow-delay=".3s"
            >
              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
                transitionSpeed={1000}
                gyroscope={true}
              >

                <div className="text-end">
                  <img className="about_tilt_img" src="/assets/img/about/pta-about-img.jpg" alt="" />
                </div>

              </Tilt>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="ptg-about-info pt-30">
                <div className="section-title-wraper">
                  <div className="tp-section" >
                    <span
                      className="tp-section__subtitle mb-15 shadow-none p-0 wow tpfadeUp"
                      data-wow-delay=".3s"
                      style={{ color: "#044CBC" }}
                    >
                      {about}
                    </span>

                    <h4
                    className="da-hero-section__title cd-headline text-black loading-bar mb-45 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <span>Empowering the Future : Upscale Living with Technology
                    </span>
                    <span className="cd-words-wrapper text_style" >

                      {/* <TypeAnimation
                          sequence={[
                            'Convert.', 
                            1000,
                            'Branding', 
                            3000,
                            'Business', 
                          ]}
                          wrapper="div"
                          cursor={false}
                          repeat={Infinity}
                          // style={{ textDecorationLine: "underline" }}
                        />   */}
                    </span>
                  </h4>
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
