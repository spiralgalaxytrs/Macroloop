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
            <h2>Advanced Construction Information Technology and Project Management Solutions</h2>
            <p className="pt-20">
            LoopTech brings together a team with extensive construction expertise and specialized knowledge in
            information technology to empower large-scale construction projects with cutting-edge end-to-end
            technologies. Our comprehensive solutions cover managerial and engineering feasibility, precise inventory
            and vendor management, meticulous document control, quality analysis and escalations, finance and
            budgeting, planning and design, and labor and staff management, ensuring a holistic approach to project
            management.
            </p>

            <h2>Cutting-Edge AI-Powered Cloud Infrastructure</h2>
            <p className="pt-20">
            Our AI-driven cloud infrastructure enables stakeholders to access intricate project insights from anywhere
            in the world, delivering unparalleled operational feasibility and real-time decision-making capabilities. LoopTech offers advanced construction information technology and project management solutions that are
            designed to empower large-scale construction projects with cutting-edge end-to-end technologies. Our
            comprehensive solutions cover:
            </p>

            <ul className="solutions_page_list">
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Managerial and engineering feasibility</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Precise inventory and vendor management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Meticulous document control </li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Finance and budgeting</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Planning and design</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Labor and staff management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Asset performance management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Project portfolio management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Finance data management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Construction safety and risk management</li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Supplier relationship management  </li>
              <li className="icon"><i class="fa fa-angle-double-right icon" aria-hidden="true"></i> Document management</li>
            </ul>

            <p>
            These solutions are complemented by our collaborative BIM technology, widely utilized in leading
            infrastructure companies, enabling seamless collaboration among project stakeholders and facilitating
            powerful process automation and workflows, while our BIM/ERP integrations ensure seamless data flow
            and enhanced project management. 
           </p>

           <h2>Collaborative BIM - Building </h2>
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
           Our collaborative BIM technology is widely utilized in leading infrastructure companies, enabling
            architects to collaborate and view 3D models in a cloud-based environment. This platform supports over
            50 native formats in our BIM-compliant storage, facilitating viewing, searching, and collaboration on
            objects in individual and federated models. By leveraging our solutions, construction businesses can
            benefit from complete visibility and control over their projects and processes, leading to enhanced profits, productivity, and the most up-to-date information. Our solutions also enable the taming of project chaos
            through a common data environment (CDE), providing a single source of truth and preventing project
            information from falling through the cracks. our company is committed to harnessing these advanced
            technologies to elevate construction project management, streamline workflows, and drive profitability
            within the construction industry.
           </p>
           <p>
           At LoopTech, we are dedicated to revolutionizing construction project management through innovative IT
            solutions and cutting-edge technologies. Contact us today to discover how our solutions can elevate your
            construction projects to new heights of efficiency and success.
           </p>
            
          <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
          <img className="solutions_sponsor_img3" src="/assets/img/brand/asite.png" alt="" />
          </div>
          </div>
  
          {/* <!-- cta are  --> */}
          <CtaArea/>  
          {/* <!-- cta end --> */}
        </div>
      </>
    );
  };
  
  export default ContentArea;