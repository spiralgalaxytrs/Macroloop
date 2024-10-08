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
                <Link href="/contact">
                  <video src="/assets/img/solutions/Robotic.mp4" alt="Metaverse" autoPlay loop muted playsInline
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}>
                  </video>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg">
        <div className="container wow tpfadeUp">
          {/* <h2>Robotic Process Automation Bots</h2> */}
          <p className="pt-20">
            Robotic Process Automation bots have the same digital skill sets as people—and then some. Think of RPA
            bots as a Digital Workforce that can interact with any system or application. For example, bots are able to
            copy-paste, scrape web data, make calculations, open and move files, parse emails, log into programs, connect to APIs, and extract unstructured data. And because bots can adapt to any interface or workflow, there’s no need to change business systems, applications, or existing processes in order to automate. RPA bots are easy to set up, use, and share. If you know how to record video on your phone, you’ll be able
            to configure RPA bots. It’s as intuitive as hitting record, play, and stop buttons and using drag-and-drop to
            move files around at work. RPA bots can be scheduled, cloned, customized, and shared to execute business
            processes throughout the organization. Our Expert team in RPA can get the most complex tasks and
            workflow automated for our customers and bring in more output in less time less resources and thereby
            reducing the financial costs .
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