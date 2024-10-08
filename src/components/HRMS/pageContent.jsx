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
                    <img src="/assets/img/solutions/construction.gif" alt="" />
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
          {/* <h2>Introduction</h2> */}
          <p className="pt-20">
            At MacroLoop Technologies, we are transforming HR by embracing the principles of Contemporary, Contextual, and Composable solutions. Our Max HR Tech Platform is designed to meet the dynamic needs of today’s businesses and workforce.
            With seamless automation, no-code customizations, and a mobile-first approach, we empower HR teams to optimize processes from recruitment to retirement.Our platform offers powerful features such as AI-driven intelligence, advanced analytics, and scalable architecture, ensuring precision and performance. Whether you’re hiring top talent, engaging employees, or streamlining payroll, MacroLoop Technologies future-proofs your HR strategy and drives business success.
          </p>

          <h3>The Power of Three: Transforming HR with MacroLoop Technologies</h3>
          <p className="pt-20">
            At MacroLoop Technologies, we understand that today's HR practice needs to be <b>Contemporary, Contextual,</b> and <b>Composable</b>—ready to adapt to the ever-evolving needs of businesses and their people.
            We’re powering the future of HR with cutting-edge technology that puts people first while driving business success.
          </p>


          <h3>Empowering People, Powering Businesses</h3>
          <p className="pt-20">
            Our Max HR Tech Platform caters to every HR requirement, from recruitment to retirement, offering a seamless, pain-free experience with zero hassle.
            No complex implementations. No long-winded integrations. Just precision, performance, and people empowerment at every step.
          </p>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="img-container p-3 mb-4 rounded">
                  <img src="/assets/img/solutions/HCM1.png" className="img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <h3>Platform Capabilities: A Closer Look</h3>
          {/* <div className="pf-dt-img-gallery mb-30">
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
            </div> */}
          <p className="pt-20">
            MacroLoop’s HR Tech Platform future-proofs your HR needs with a powerful suite of features.
            Our <b>no-code automation</b> makes customizing workflows effortless, ensuring a mobile-first experience designed with Gen-Z and the modern workforce in mind.
          </p>

          <p className="pt-5">
            Explore the platform's extensive capabilities:
          </p>
          <ul className="solutions_page_list">
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Automation & Intelligence</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Analytics Intelligence</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> BPM Layer <span className="text-secondary">(Business Process Management)</span></li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Reports Engine</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Workflow Engine</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> AI Engine</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Security Engine</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Mobile & Web Framework</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> API Integration</li>
            {/* <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Construction safety and risk management</li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Supplier relationship management  </li>
            <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Document management</li> */}
          </ul>

          <h3>Maximizing ROI with Expertise & Scalability</h3>
          <p className="pt-20">
            Benefit from our extensive HR experience. Our platform is built to deliver assured ROI, thanks to its <b>scalable, extensible,</b> and <b>easy-to-integrate</b> architecture.
            Enjoy a <b>comprehensive view</b> of your HR operations while maintaining <b>information and data security</b> at all times.
          </p>


          <div className="container py-20">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid red", }}>
                  <div className="border-box ps-3">
                    <h3>Max Recruit</h3>
                    <p className="pt-20">Efficient recruitment for exceptional talant</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid blue", }}>
                  <div className="border-box ps-3">
                    <h3>Max Foundation</h3>
                    <p className="pt-20">Single source of employee data from hire to retire</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid green", }}>
                  <div className="border-box ps-3">
                    <h3>Max Workforce</h3>
                    <p className="pt-20">Manage and track employees with efficiency</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid orange", }}>
                  <div className="border-box ps-3">
                    <h3>Max Engage</h3>
                    <p className="pt-20">Your finger on the employee's pulse</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid lightgreen", }}>
                  <div className="border-box ps-3">
                    <h3>Max Payroll</h3>
                    <p className="pt-20">Effectively manage compensation and benefits</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid #8F00FF", }}>
                  <div className="border-box ps-3">
                    <h3>Max Talent</h3>
                    <p className="pt-20">Align employee performance to company goals</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid yellow", }}>
                  <div className="border-box ps-3">
                    <h3>Max Learn</h3>
                    <p className="pt-20">Upskill and reskill employees for better growth</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="content-container" style={{ borderLeft: "5px solid gray", }}>
                  <div className="border-box ps-3">
                    <h3>Max Insight</h3>
                    <p className="pt-20">Greater insights with effective dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <h2>HR Features That Deliver Impact</h2>
          <p className="pt-5">
            Each of our HR Tech modules is designed to address critical areas of HR:
          </p>
          <ul className="solutions_page_list">
            <li className="icon">Hire Right, Hire Fast: Max HR Resume-Scorer quickly filters the best talent, reducing time-to-hire</li>
            <li className="icon">Analytics Intelligence</li>
            <li className="icon">Create Meaningful Engagement:<span className="text-secondary"> Max HR Workforce fosters deeper employee connections</span></li>
            <li className="icon">Accelerate Talent Growth: Max HR Talent empowers employees to realize their ambitions</li>
            <li className="icon">Efficient Payroll Management: Max HR Payroll simplifies monthly operations, keeping everything on track</li>
            <li className="icon">Boost Employee Loyalty: Max Engage strengthens employee bonds, ensuring higher retention.</li>
          </ul> */}

          <h3>The Future of HR is Here, with MacroLoop Technologies</h3>
          <p className="pt-20">
            Our HR Tech platform is more than just a tool—it’s the future of HR.
            With a <b>modular build and deployment,</b> we ensure you get exactly what your organization needs, whether you're scaling for growth or looking for efficiency gains.
          </p>

          {/* <p className="pt-5">
            Join us on the journey to <b>future-proof</b> your HR strategy and power your business for success.
          </p> */}

          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img className="solutions_sponsor_img3" src="/assets/img/brand/asite.png" alt="" />
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