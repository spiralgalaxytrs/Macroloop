import service_data from "@/src/data/service-data";
import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";

// working_process_data 
const working_process_data = [
    {
        id: 1,
        bg_color: "",
        icon: "fa-solid fa-bullseye",
        title: "Discovery & Strategy",
        // desctiption: "where they assess your brand, industry, and audience to develop a custom marketing plan.",
        desctiption:"Assess your brand, industry, and audience to craft a tailored marketing plan.",
    },
    {
        id: 2,
        bg_color: "cornblue-bg",
        icon: "fa-solid fa-magnifying-glass",
        title: "In Planning & Research",
        // desctiption: "they conduct competitive analysis and keyword research to ensure every campaign element is strategically positioned.",
        desctiption: "Perform competitive analysis and keyword research for strategic campaign positioning.",
    },
    {
        id: 3,
        bg_color: "orange-bg",
        icon: "fa-solid fa-check-to-slot",
        title: "Execution & Optimization",
        // desctiption: " they implement multi-channel strategies across digital and offline platforms, refining them in real-time.",
        desctiption: "Execute and refine multi-channel strategies across digital and offline platforms.",
    },
    {
        id: 4,
        bg_color: "blue-bg",
        icon: "fa-solid fa-chart-line",
        title: "Analytics & Reporting",
        // desctiption: "provides transparency with performance tracking, while Continuous Improvement ensures ongoing monitoring and adjustments for long-term success and growth.",
        desctiption: "Provides transparent tracking with ongoing adjustments for lasting success.",
    },
]

// img_gallery_working_process

const img_gallery_working_process = [
    "/assets/img/portfolio/3.png",
    "/assets/img/portfolio/2.png",
    "/assets/img/portfolio/1.png",
]


// Why_choose_us
const Why_choose_us = [
    {
        id:1, 
        lists : [
          <>Content Marketing</>,
          <>Search Engine Optimisation</>
        ]
    },
    {
        id:2, 
        lists : [
          <>Influencer Marketing</>,
          <>Social Media Marketing</>,
        ]
    },
    {
        id:3, 
        lists : [
          <>Conventional Marketing</>,
          <>Analytics & Reporting</>,
        ]
    }
]
const tools = [
    {
        id:1, 
        lists : [
          <><b>AI Platforms:</b> For trend predictions and insights</>,
          <><b>Data Analytics:</b> Google Analytics, HubSpot</>,
          <><b>SEO:</b> Ahrefs, Moz</>,
        ]
    },
    {
        id:2, 
        lists : [
          <><b>Social Media:</b> Hootsuite, Buffer</>,
          <><b>PPC:</b> Google Ads</>,
        ]
    },
    {
        id:3, 
        lists : [
          <><b>Email Marketing:</b> MailChimp</>,
          <><b>Web Design:</b> WordPress, Shopify </>
        ]
    }
]


const LooptechSyanpseDetails = () => {

  return (
    <>


      <div className="tp-pf-details-page-area pt-50 wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img">
                  <Link href="/contact">
                  <img src="/assets/img/portfolio/1.jpg" alt="" />
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

      <div className="tp-pf-detials-main pt-60">
        <div className="container wow tpfadeUp">
          {/* <h3 className="tp-blog-detials-title mb-25">Case study overview</h3> */}
          <p>
            LoopTech Synapse elevates brands by combining advanced technology with creative strategies.{" "}
            Using AI, data analytics, and expertise in both digital and offline channels, they create customized, data-driven campaigns that resonate with audiences and deliver measurable results.{" "}
            Their vision focuses on transcending traditional marketing methods, offering seamless integration for memorable brand experiences that drive growth and long-term success.{" "}
            <br />
            <br />
          </p>
          <h3 className="tp-blog-detials-title mb-25">Why choose us?</h3>
          <p>
            LoopTech Synapse stands out for its results-driven marketing services by integrating advanced technology, such as AI and data analytics, to enhance both digital and offline brand presence.{" "}
            They offer customized strategies tailored to each business’s goals, delivering measurable, data-driven results.{" "}
            Their holistic approach combines digital and traditional marketing for maximum impact, supported by creative innovation and a proven track record of success across industries.{" "}
            With a client-focused partnership, LoopTech provides ongoing support and transparency, ensuring long-term growth and success.{" "}
          </p>
          <h3 className="tp-blog-detials-title mb-25"> Our Services</h3>
          <div className="pf-deatials-fea mb-60">
            <div className="row">
              {Why_choose_us.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="tp-bs-about-fea border-bottom-0 mr-30">
                    <ul>
                      {item.lists.map((list, i) => (
                        <li>
                          <i className="fal fa-check"></i>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pf-dt-img-gallery mb-30">
            <div className="row">
              {img_gallery_working_process.map((item, i) => (
                <div key={i} className="col-lg-4 wow tpfadeUp">
                  <div
                    className="pf-details-img-gl w-img mb-30 "
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                    <img src={item} alt="theme-pure" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3
            className="tp-blog-detials-title mb-25 wow tpfadeUp"
            data-wow-delay
          >
            Working process
          </h3>
          <p className="wow tpfadeUp">
            LoopTech Synapse follows a streamlined process to deliver optimal results. It begins with : 
          </p>

          <div className="pf-dt-process-wrapper pb-60">
            <div className="row">
              {working_process_data.map((item, i) => (
                <div key={i} className="col-lg-4 col-xl-3">
                  <div className="pf-dt-process-item  wow tpfadeUp text-center mb-60">
                    <div className="pf-dt-process-item__border mb-25">
                      <div
                        className={`pf-dt-process-item__icon ${item.bg_color}`}
                      >
                        <span>
                          <i className={item.icon}></i>
                        </span>
                      </div>
                    </div>
                    <h3 className="pf-dt-process-item__title mb-10">
                      <a href="#">{item.title}</a>{" "}
                    </h3>
                    <p>{item.desctiption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="tp-blog-detials-title mb-25">Our Strategies</h3>
        <p>  
          LoopTech Synapse leverages cutting-edge tools and technologies to boost campaign efficiency and performance. They integrate AI-powered platforms for predictive insights, employ data analytics for tracking and optimization, and use SEO, social media, and PPC tools to ensure comprehensive digital strategies. Their approach is data-driven, adaptable, and focused on delivering measurable results.
        </p>
        <h3 className="tp-blog-detials-title mb-25">Tools</h3>
        <div className="pf-deatials-fea mb-60">
          <div className="row">
            {tools.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="tp-bs-about-fea border-bottom-0 mr-30">
                  <ul>
                    {item.lists.map((list, i) => (
                      <li>
                        <i className="fal fa-check"></i>
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        </div>
        

        {/* <!-- cta are  --> */}
        <CtaArea />  
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default LooptechSyanpseDetails;
