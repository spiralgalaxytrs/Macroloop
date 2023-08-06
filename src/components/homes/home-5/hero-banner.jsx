import React from "react";
import  Link  from 'next/link';
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";



const HeroBanner = () => {
  return (
    <>
      <div className="tp-da-hero pb-80 pt-80 dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="da-hero-section mt-40">
                <span className="da-hero-section__subtitle dark-bg mb-15 d-inline-block wow tpfadeUp">
                  <b style={{color:"#0020ff"}}> LCG </b>
                </span>
                <div className="cd-intro">
                  <h4
                    className="da-hero-section__title cd-headline text-white loading-bar mb-45 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <span>Join in the movement of our Deep Tech Network
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
              <div
                className="da-header-grd-btn d-inline-block mr-20 mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link href="/lcg" className="tp-grd-btn">
                  Join LCG
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
             
            </div>

            <div
              className="col-lg-7 wow tpfadeUp"
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
           
              <div className="tp-da-hero-img text-end pr-30">
                <img src="/assets/img/hero/da-hero-img.jpg" alt="" />
              </div>
              
            </Tilt>
            </div>
          


          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
