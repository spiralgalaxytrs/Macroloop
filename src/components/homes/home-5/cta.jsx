import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';



const Cta = ({rButton="Contact Us" ,lbutton="Request Meeting"}) => {
  return (
    <>
      <div className="tp-bs-cta-area pt-0 pb-55 p-relative" style={{background:"url('/assets/img/image.jpg')",backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",opacity:1.5}}>
        <div className="container">
          <div className="row pt-50">
            <div className="col-12">
              <div className="bs-cta-section text-center">
                {/* <span className="bs-cta-section__subtitle text-blue mb-5 d-inline-block wow tpfadeUp ">
                  Schedule a 30 minute call
                </span> */}
                <div className="cd-intro">
                  <h3 className="bs-cta-section__title cd-headline text-black loading-bar wow tpfadeUp">
                  <div style={{color:"#000000",fontWeight:500}}> 
                      Start your technology journey better with LoopTech's
                      razor-edged solutions
                  </div>
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
                // style={{paddingInline:"45px"}}
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
