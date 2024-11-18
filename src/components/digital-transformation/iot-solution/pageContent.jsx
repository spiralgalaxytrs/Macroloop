import React from "react";
import Link from "next/link";
import Cta from "../../homes/home-5/cta";




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
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                overflow: 'hidden',
              }}>

                <video src="/assets/img/solutions/IOT.mp4" alt="Metaverse" autoPlay loop muted playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}>
                </video>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-30">
        <div className="container wow tpfadeUp">

          {/* <h2>Introduction to IOT Solution:</h2> */}
          <p className="pt-20">
            At our company, we specialize in providing customized IoT and digital transformation solutions tailored to your organization's specific needs. Through detailed consulting, we analyze your challenges and recommend the most suitable solutions available in the market.
            By leveraging IoT technologies and digital transformation strategies, we help optimize operations, streamline processes, and drive innovation. Our approach is collaborative, working closely with your team for seamless integration and adoption.
          </p>

          <h2>IoT and Digital Transformation</h2>
          <p className="pt-20">
            At our company, we specialize in providing customized IoT and digital transformation solutions tailored to your organization's unique needs. Through in-depth consulting, we carefully analyze your challenges and pain points, ensuring we understand your requirements thoroughly. Our team of experts then leverages their industry knowledge and experience to address these issues and recommend the ideal solutions available in the market. We prioritize delivering the best outcomes for your organization, focusing on efficiency, productivity, and growth.
            By embracing IoT technologies and digital transformation strategies, we empower your organization to optimize operations, streamline processes, and unlock new opportunities for innovation. Our approach is rooted in collaboration, working closely with your team to ensure seamless integration and adoption of the recommended solutions.
          </p>

          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/Auto.jpg" alt="" />
          </div> */}
        </div>

        {/* <!-- cta are  --> */}
        <Cta />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;