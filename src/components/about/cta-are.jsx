import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';



const Cta = ({rButton="Join LCG" ,lbutton="Google Form"}) => {
  return (
    <>
      <div className="tp-bs-cta-area pt-50 pb-55 dark-bg p-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-cta-section text-center">
                {/* <span className="bs-cta-section__subtitle mb-5 d-inline-block wow tpfadeUp" style={{color:"#044CBC"}} >
                  Schedule a 30 minute call
                </span> */}
                <div className="cd-intro">
                  <h3 className="bs-cta-section__title cd-headline text-black loading-bar mb-55 wow tpfadeUp">
                   
                      Start your technology journey better <br /> with LoopTech's<br />razor-edged solutions

                       
                    
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bs-cta-btns text-center">
              {/* <Link href="/contact" className="tp-black-btn mr-30 wow tpfadeRight">
                {rButton}
                <span>
                  <i className="fal fa-long-arrow-right"></i>
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                <b></b>
              </Link> */}
              <a
                href="mailto:info@looptech.in?subject=Requesting a meeting to  discuss our requirement-Reg."
                className="tp-black-btn wow tpfadeLeft"
                // style={{paddingInlineEnd:"45px"}}
                // Request Meetting
              >
                {/* <span>
                  <i className="fab fa-google" style={{marginRight: "5px"}}></i>
                  <i className="fab fa-google" style={{marginRight: "5px"}}></i>
                </span> */}
                {lbutton}
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
};

export default Cta;
