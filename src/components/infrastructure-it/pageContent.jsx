import React, { useEffect, useState } from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";

const ContentArea = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width after component mounts
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    // Initial check and add event listener for resizing
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <style>

      </style>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Link href="/solutions/Digital-Transformation/Infrastructure">
                        <img
                          src="/assets/img/solutions/IT-infrastructure.gif"
                          style={{ width: "100%", height: "350px" }}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="d-flex h-100 flex-column justify-content-center">
                        <h2 style={{ fontWeight: 600 }}>Comprehensive IT Infrastructure</h2>
                        <p
                          style={{ fontSize: "18px", wordSpacing: "4px" }}
                          className="pt-20"
                        >
                          In today's digital landscape, a robust IT infrastructure is
                          essential for ensuring seamless communication, safeguarding data,
                          and maintaining business continuity. MacroLoop Technologies offers
                          a comprehensive suite of IT Infrastructure solutions designed to
                          empower your organization with secure, efficient, and scalable
                          technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

          <div className="pas1 border-2 border-gray-300 rounded-full p-6 shadow-lg mb-4 hover-effect1 rounded">
            <h2 className="text-center text-xl font-medium pt-3" style={{ color: '#0D6EFD' }}>
              Networking Services
            </h2>


            <div className="row col-12 align-middle space-x-4">
              <div className="col-12 col-md-6 inline-block align-text-middle order-2	order-lg-1 p-4">
                <div className="col-lg-12">
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Network Security: </b> Our multi-layered architecture defends against cyber threats with firewalls, intrusion detection, and encryption protocols, ensuring your data remains protected.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Performance Optimization: </b> We conduct continuous monitoring and management to maximize uptime and speed, enabling seamless operations with minimal latency.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Proactive Threat Detection: </b> Utilizing advanced AI-driven systems, we identify vulnerabilities before they escalate, offering real-time alerts and automated responses to keep your network secure.
                    </div>
                  </p>
                  {/* <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                <b>Expert Coaching : </b> Guidance from industry experts
                </div>
              </p> */}
                </div>
              </div>
              <div className="col-12 col-md-6 img23 order-1 order-lg-2 p-4 rounded ps-5">
                <Image classname='animated-img1 p-4 rounded-md' src="/assets/img/solutions/a.png" alt="Cloud Services" width={550} height={300} style={{width: "100%",borderRadius: "10px"}}  />
              </div>
              {/* <div className="col-12 col-md-6 order-1 order-lg-2 img23 rounded">
                <Image className="animated-img1 p-4" src="/assets/img/solutions/a.png" alt="Cloud Services" width={600} height={350} style={{width: "100%",borderRadius: "10px"}}  />
              </div> */}

            </div>
          </div>
          <div className="pas1 border-2 border-gray-300 rounded-lg p-6 shadow-lg mb-4 hover-effect1 rounded">
            <h2 className="text-center text-xl font-medium pt-3" style={{ color: '#0D6EFD' }}>Data Centre and Server Management</h2>

            <div className="row col-12 align-middle space-x-4">

              <div className="col-12 col-md-6 img23 p-4 rounded ps-5 img23">
                <Image classname='animated-img1 p-4 rounded-md' src="/assets/img/solutions/b.png" alt="Cloud Services" width={550} height={300} style={{width: "100%",borderRadius: "10px"}}  />
              </div>
              <div className="col-12 col-md-6 inline-block align-text-middle order-2	order-lg-1 p-4">
                <div className="col-lg-12">
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Server Security & Monitoring: </b> We provide 24/7 surveillance and real-time issue resolution to minimize downtime and protect your infrastructure.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Data Protection:  </b>  Our high-level security protocols, including encryption and access controls, ensure your data is safeguarded from unauthorized access.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Scalable Solutions:</b> Our flexible server management adapts to your growing business needs, providing consistent performance without unnecessary costs.
                    </div>
                  </p>
                  {/* <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                <b>Expert Coaching : </b> Guidance from industry experts
                </div>
              </p> */}
                </div>
              </div>

            </div>
          </div>
          <div className="pas1 border-2 border-gray-300 rounded-lg p-6 shadow-lg mb-4 hover-effect1 rounded">
            <h2 className="text-center text-xl font-medium pt-3" style={{ color: '#0D6EFD' }}>Cloud Services</h2>

            <div className="row col-12 align-middle space-x-4 ">

              <div className="col-12 col-md-6 inline-block align-text-middle order-2	order-lg-1 p-4">
                <div className="col-lg-12">
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Secure Cloud Migration: </b> We ensure a seamless transition to cloud platforms, maintaining data integrity and minimizing the business disruption.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Data Encryption & Backup: </b>  Advanced encryption techniques and regular backups protect your information and ensure recoverability of data.
                    </div>
                  </p>
                  <p className="pt-3 mb-0 d-flex">
                    <div className="mt-1">
                      <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                    </div>
                    <div className="mt-1">
                      <b>Disaster Recovery:  </b> Our tailored recovery solutions guarantee business continuity by restoring operations quickly and efficiently during unexpected disruptions.
                    </div>
                  </p>
                  {/* <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                <b>Expert Coaching : </b> Guidance from industry experts
                </div>
              </p> */}
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-lg-2 img23 p-4" >
                <Image classname='animated-img1 p-4' src="/assets/img/solutions/c.png" alt="Cloud Services" width={600} height={300} style={{width: "100%",borderRadius: "10px"}}/>
              </div>

            </div>
          </div>
        </div>
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
            businesses.  solutions enable seamless communication and
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

    </>
  );
};

export default ContentArea;
