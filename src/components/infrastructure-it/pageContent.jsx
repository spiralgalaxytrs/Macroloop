import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";
import { hide } from "@popperjs/core";


const ContentArea = () => {
  const img_gallery_working_process = [
    "/assets/img/portfolio/pf-details-gl-1.jpg",
    "/assets/img/portfolio/pf-details-gl-2.jpg",
    "/assets/img/portfolio/pf-details-gl-3.jpg",
  ];

  const isMobile = () => window.innerWidth <= 768;


  return (
    <>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                <div className="row">
           <div className="col-12 col-md-6">
           <Link href="/contact">
          <img src="/assets/img/solutions/IT-infrastructure.gif" style={{ width: '450px', height: '350px' }} alt="" />
           </Link>
            </div>
  
          <div className="col-12 col-md-6" style={{paddingTop:'30px'}}>
           <h2 style={{fontWeight:600}}>Comprehensive IT Infrastructure</h2>
           <p style={{fontSize:'18px',wordSpacing:"4px"}} className="pt-20">
            In today's digital landscape, a robust IT infrastructure is essential for ensuring seamless communication, safeguarding data, and maintaining business continuity. MacroLoop Technologies offers a comprehensive suite of IT Infrastructure solutions designed to empower your organization with secure, efficient, and scalable technology.
          </p>
          </div>
          </div>

                 
            
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

      <div className="tp-pf-detials-main dark-bg pt-50">
        <div className="container wow tpfadeUp">
          {/* <h2>Comprehensive IT Infrastructure</h2>
          <p className="pt-20">
          In today's digital landscape, a robust IT infrastructure is essential for ensuring seamless communication, safeguarding data, and maintaining business continuity. MacroLoop Technologies offers a comprehensive suite of IT Infrastructure solutions designed to empower your organization with secure, efficient, and scalable technology.
          </p> */}

          <h2 style={{fontWeight:500}}>Networking Services</h2>

          <p className="pt-20" style={{wordSpacing:"4px",marginBottom:"10px",paddingTop:"15px"}}>
          Our <strong style={{fontWeight:450}}>Network Services</strong> provide a secure, reliable, and high-performing foundation for your organization's communication needs:       
          </p>
          <p className="pt-21" style={{wordSpacing:"4px"}}>
          <ul>
            <li>
            &#8226; <strong style={{fontWeight:450}}>Network Security:</strong> Our multi-layered architecture defends against cyber threats with firewalls, intrusion detection, and encryption protocols, ensuring your data remains protected.
            </li>
        
            <li>
            &#8226; <strong style={{fontWeight:450}}>Performance Optimization: </strong>We conduct continuous monitoring and management to maximize uptime and speed, enabling seamless operations with minimal latency.
            </li>
       
            <li>
            &#8226; <strong style={{fontWeight:450}}>Proactive Threat Detection:</strong>Utilizing advanced Al-driven systems, we identify vulnerabilities before they escalate, offering real-time alerts and automated responses to keep your network secure.
            </li>
          </ul>                    
          </p>

          <h2 style={{fontWeight:500}}>Data Centre and Server Management</h2>

          <p className="pt-20" style={{wordSpacing:"4px",marginBottom:"10px",paddingTop:"15px"}}>          
          Recognizing the value of your data, our<strong style={{fontWeight:450}}> Data Centre and Server Management </strong>services ensure your servers operate efficiently and securely:
          </p>
          <p className="pt-21" style={{wordSpacing:"4px"}}>
          <ul>
            <li>
            &#8226; <strong style={{fontWeight:450}}>Server Security & Monitoring:</strong> We provide 24/7 surveillance and real-time issue resolution to minimize downtime and protect your infrastructure.
            </li>
         
            <li>
            &#8226; <strong style={{fontWeight:450}}>Data Protection: </strong>Our high-level security protocols, including encryption and access controls, ensure your data is safeguarded from unauthorized access.
            </li>
          
            <li>
            &#8226; <strong style={{fontWeight:450}}>Scalable Solutions: </strong>Our flexible server management adapts to your growing business needs, providing consistent performance without unnecessary costs.
            </li>
          </ul>          
          </p>

          <h2 style={{fontWeight:500}}>Cloud Services</h2>

          <p className="pt-20" style={{wordSpacing:"4px",marginBottom:"10px",paddingTop:"15px"}}>
          Leverage the cloud's power with our comprehensive <strong style={{fontWeight:450}}>Cloud Services</strong>, prioritizing safety and data protection:
          </p>
          <p className="pt-21" style={{wordSpacing:"4px"}}>
          <ul>
            <li>
            &#8226; <strong style={{fontWeight:450}}>Secure Cloud Migration:</strong> We ensure a seamless transition to cloud platforms, maintaining data integrity and minimizing business disruption.
            </li>

            <li>
            &#8226; <strong style={{fontWeight:450}}>Data Encryption & Backup:</strong> Advanced encryption techniques and regular backups protect your information and ensure recoverability.
            </li>

            <li>
            &#8226; <strong style={{fontWeight:450}}>Disaster Recovery: </strong>Our tailored recovery solutions guarantee business continuity by restoring operations quickly and efficiently during unexpected disruptions.
            </li>
          </ul> 
          
          </p>

          {/* <h2>Security Solutions</h2>

          <p className="pt-20">
            Protecting your digital assets and ensuring regulatory compliance
            are paramount. Our security solutions are designed to safeguard your
            infrastructure, data, and applications from evolving cyber threats.
            Enhance your network security posture with our comprehensive range
            of solutions, including firewalls, intrusion detection systems, and
            secure access controls. Safeguard your sensitive data with
            encryption, access controls, and data loss prevention solutions that
            mitigate the risk of unauthorized access and data breaches. Protect
            your endpoints from malware, ransomware, and other advanced threats
            with our endpoint security solutions that provide comprehensive
            threat protection.
          </p> */}

          {/* <h2>Collaboration and Communication</h2>

          <p className="pt-20">
            Efficient collaboration and communication are essential for modern
            businesses. Our solutions enable seamless communication and
            collaboration across teams, enhancing productivity and innovation.
            Streamline communication with integrated voice, video, and messaging
            solutions that enable seamless collaboration across your
            organization. Facilitate virtual meetings and collaboration with our
            robust virtual meeting solutions that offer high-quality audio and
            video conferencing capabilities.
          </p>

          <h2>Support and Managed Services</h2>

          <p className="pt-20">
            We understand the importance of reliable support and proactive
            management of your IT infrastructure. Our support and managed
            services are tailored to ensure the optimal performance and
            availability of your systems. Access expert technical support and
            troubleshooting services to address issues promptly and minimize
            downtime. Entrust the management of your IT infrastructure to our
            team of professionals, allowing you to focus on your core business
            objectives while we ensure the integrity and performance of your
            systems. Benefit from our IT consulting services to gain strategic
            insights and recommendations for optimizing your IT infrastructure
            and aligning it with your business goals.
          </p>

          <p className="pt-20">
            With a focus on innovation, reliability, and customer satisfaction,
            we are your trusted partner in navigating the complexities of modern
            IT infrastructure. Contact us today to explore how our tailored
            solutions can drive the success of your business.
          </p> */}

          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img
              className="solutions_sponsor_img3"
              src="/assets/img/brand/hp_new.png"
              alt=""
            />
            <img
              className="solutions_sponsor_img3"
              src="/assets/img/brand/acer_new.png"
              alt=""
            />
            <img
              className="solutions_sponsor_img3"
              src="/assets/img/brand/CISCO_new.png"
              alt=""
            />
            <img
              className="solutions_sponsor_img3"
              src="/assets/img/brand/IBM_new.png"
              alt=""
            />
          </div> */}
        </div>

        {/* <!-- cta are  --> */}
        <CtaArea />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;
