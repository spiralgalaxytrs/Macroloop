import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";




const ContentArea = () => {


    const img_gallery_working_process = [
        "/assets/img/portfolio/pf-details-gl-1.jpg",
        "/assets/img/portfolio/pf-details-gl-2.jpg",
        "/assets/img/portfolio/pf-details-gl-3.jpg",
    ]

    return (
      <>
        <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pf-details-page-banner p-relative">
                  <div className="pf-details-banner-img1 w-img w-imgggg">
                    <Link href="/contact">
                    <img src="/assets/img/solutions/system-solutions.gif" alt="" />
                    </Link>
                  </div>
                  {/* <div className="pf-details-banner__info">
                    <div className="row align-items-center align-items-xl-start">
                      <div className="col-lg-8">
                        <div className="pf-details-banner__info-left pl-30">
                          <span>
                            <b>Learn</b> 
                          </span>
                          <span>
                            <b>Contribute</b> 
                          </span>
                          <span>
                            <b>Grow</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pf-details-banner__info-right text-lg-end pl-30">
                          
                           <Link href="/contact">
                           Contact Us
                            <span>
                              <i className="fal fa-long-arrow-right"></i>
                            </span></Link>
                          
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="tp-pf-detials-main dark-bg pt-60">
          <div className="container wow tpfadeUp">
            <h2>Comprehensive Security Solutions for Modern Businesses</h2>
            <p className="pt-40">
            In today's dynamic business landscape, safeguarding physical assets, personnel, and sensitive data is
            paramount. At LoopTech, we offer tailored and comprehensive security solutions to protect your
            business from a myriad of potential threats, integrating both physical and cyber security measures
            seamlessly. Physical security plays a crucial role in safeguarding personnel, hardware, software, networks, and data from threats such as theft, vandalism, and natural disasters.
            </p>

            <p>
            Our range of access control measures, including ID badges, keypads, security guards, and advanced
            technology-supported solutions such as ID card scanners and NFC ID cards, ensures that only authorized
            personnel have access to specific assets. Our state-of-the-art surveillance solutions, utilizing closed-circuit
            television (CCTV) cameras, act as a powerful deterrent and capture criminal behavior. Our solutions
            extend beyond traditional threats to encompass safeguarding against data breaches and unauthorized
            access, including preventing unauthorized photography of sensitive data and ensuring secure workspaces. By harnessing AI-powered analytics, our intrusion detection systems excel in discerning routine activities
            from potential security breaches with a remarkable degree of accuracy, allowing for swift identification of
            suspicious behavior and real-time alerts.
            </p>

            <p>
            In addition to bolstering physical security, our AI-integrated solutions seamlessly integrate with cyber
            security protocols, creating a cohesive and comprehensive security framework that addresses both
            physical and digital threats. Our AI-powered intrusion detection systems seamlessly integrate with
            surveillance cameras, enabling real-time analysis of video feeds and enhancing the system's ability to
            identify and respond to potential security breaches captured by the surveillance infrastructure.
            </p>

            <p>
            We help businesses optimize their security investment by evaluating scenarios based on their risk profile. From data discovery and classification to intrusion detection and prevention systems, we provide
            comprehensive solutions to protect your sensitive information.
            </p>

            <p>
            In conclusion, physical security and AI-driven cyber security are critical components of business resilience. At LoopTech, we are committed to providing tailored physical security solutions and advanced AI integrated systems to ensure uncompromising protection for your business. Contact us today to learn
            more about how our comprehensive security solutions can elevate the security posture of your
            organization, both physically. 
            </p>
            
          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
          <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/sensegiz_new.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/genetecweb.png" alt="" />
          </div> */}
          </div>
  
          {/* <!-- cta are  --> */}
          <CtaArea/>  
          {/* <!-- cta end --> */}
        </div>
      </>
    );
  };
  
  export default ContentArea;