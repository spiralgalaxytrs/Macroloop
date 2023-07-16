import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';



const Cta = ({rButton="Join LCG" ,lbutton="Google Form"}) => {
  return (
    <>
      <div className="tp-bs-cta-area pt-105 pb-120 dark-bg p-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-cta-section text-center">
                <span className="bs-cta-section__subtitle text-white mb-5 d-inline-block wow tpfadeUp">
                  Schedule a 30 minute call
                </span>
                <div className="cd-intro">
                  <h3 className="bs-cta-section__title cd-headline text-white loading-bar mb-55 wow tpfadeUp">
                    <span>
                      Start your technology journey better <br /> with LoopTech's<br />
                       {" "}
                    </span>
                    <span className="cd-words-wrapper bs-cta-wrapper">

                   <TypeAnimation
                          sequence={[
                            'INDUSTRY AUTOMATION', 
                            3000,
                            'SMART CAMPUS SOLUTIONS', 
                            3000,
                            'WIFI SOLUTIONS', 
                            3000,
                            'IOT AND DIGITAL TRANSFORMATION', 
                            3000,

                          ]}
                          wrapper="div"
                          cursor={false}
                          repeat={Infinity}
                          style={{ color: "#0020FF", textDecorationLine: "underline" }}
                        /> 
                    </span>
                    <span> {" "}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bs-cta-btns text-center">
              <Link href="/contact" className="tp-btn tp-btn-hover mr-30 wow tpfadeRight">
                {rButton}
                <span>
                  <i className="fal fa-long-arrow-right"></i>
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                <b></b>
              </Link>
              <a
                href="mailto:info@looptech.in?subject=Requesting+a+meeting+to+discuss+our+requirement+-+Reg."
                className="tp-white-btn tp-btn-hover alt-color cronblue-g-color wow tpfadeLeft"
              >
                <span>
                  <i className="fab fa-google"></i>
                  <i className="fab fa-google"></i>
                </span>
                {lbutton}<b></b>
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
};

export default Cta;
