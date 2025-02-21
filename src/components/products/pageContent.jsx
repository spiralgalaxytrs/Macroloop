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
                  <Link href="/solutions/Construction-Technical">
                    <img src="/assets/img/solutions/construction.gif" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp" style={{ wordSpacing: "4px" }}>
          <h2>CONSTRUCTION TECHNOLOGY:</h2>
          <p className="pt-20">
            At MacroLoop Technologies, we redefine construction project excellence with innovative, technology-driven solutions that transform workflows, amplify collaboration, and drive unparalleled efficiency. Our comprehensive suite-spanning Project Management, Document Management, and advanced Building Information Modeling (BIM)-is designed to keep your projects not just on schedule and within budget but positioned for success in a rapidly evolving industry. With MacroLoop, you're empowered to build smarter, faster, and with confidence, staying ahead of the curve and setting new benchmarks in construction excellence.
          </p>

          <div className="tp-ab-sv-tabs mb-30">
            <ul className="nav nav-pills mb-30 d-flex justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button tabIndex="-1" className="nav-link active" id="2000" data-bs-toggle="pill" data-bs-target="#pills-2000"
                  type="button" role="tab" aria-controls="pills-2000" aria-selected="true">PMS</button>
              </li>
              <li className="nav-item" role="presentation">
                <button tabIndex="-1" className="nav-link" id="2010" data-bs-toggle="pill" data-bs-target="#pills-2010"
                  type="button" role="tab" aria-controls="pills-2010" aria-selected="false">DMS</button>
              </li>
              <li className="nav-item" role="presentation">
                <button tabIndex="-1" className="nav-link" id="2020" data-bs-toggle="pill" data-bs-target="#pills-2020"
                  type="button" role="tab" aria-controls="pills-2020" aria-selected="false">BIM</button>
              </li>

            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-2000" role="tabpanel" aria-labelledby="2000">
                <div className="tp-ab-sv-tabs-content">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img src="/assets/img/pms.png" className="img-fluid animated-img project-img" alt=" " style={{ height: "340px", width: "600px", borderRadius: "15px" }} />
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex h-100 flex-column justify-content-center">
                      <h2>Project Management Solutions (PMS)</h2>
                      <br></br>
                      <p>
                        Our Project Management Solutions (PMS) empower construction teams with real-time collaboration, task management, and streamlined communication. We help you oversee every aspect of your project, from planning to completion, with:
                      </p>
                    </div>
                    </div>
                  </div>

                  <div className="container" style={{ marginTop: "20px" }}>
                    <div className="row">
                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Task Scheduling & Allocation</h5>
                            <p className="card-text" style={{color:"white"}}>Keep your projects on track with detailed task schedules, resource allocation, and real-time updates.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Collaboration Tools</h5>
                            <p className="card-text" style={{color:"white"}}>Enhance teamwork with integrated communication tools, ensuring everyone from site teams to office managers stays aligned.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Cost & Risk Management</h5>
                            <p className="card-text" style={{color:"white"}}>Identify potential risks and control costs throughout the lifecycle of your construction projects.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Performance Analytics</h5>
                            <p className="card-text" style={{color:"white"}}>Access in-depth analytics to make informed decisions and optimize your project's success.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-2010" role="tabpanel" aria-labelledby="2010">
                <div className="tp-ab-sv-tabs-content">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img src="/assets/img/dms.png" className="img-fluid animated-img project-img" alt=" " style={{ height: "370px", width: "600px", borderRadius: "15px" }} />
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="d-flex h-100 flex-column justify-content-center">
                      <h2>Document Management Solutions (DMS)</h2>
                      <br></br>
                      <p>
                        With MacroLoop's Document Management Solutions (DMS), handling construction documents becomes seamless. We provide a secure, centralized platform for managing all project documents, ensuring easy access, compliance, and accuracy:
                      </p>
                    </div>
                    </div>
                  </div>

                  <div className="container" style={{ marginTop: "20px" }}>

                    <div className="row">
                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title" >Centralized Storage</h5>
                            <p className="card-text" style={{color:"white"}}>Access all your project documents in one secure location, from contracts and drawings to change orders and site reports.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Version Control</h5>
                            <p className="card-text" style={{color:"white"}}>Eliminate confusion and errors with real-time version control and ensuring the entire team always works from the latest version.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Permission-based Access</h5>
                            <p className="card-text" style={{color:"white"}}>Maintain control over who can view, edit, and approve documents, ensuring data security and project integrity.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Seamless Integration</h5>
                            <p className="card-text" style={{color:"white"}}>Our DMS integrates with popular construction management tools, enhancing your workflow without disruption.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-2020" role="tabpanel" aria-labelledby="2020">
                <div className="tp-ab-sv-tabs-content">
                  <div className="row">
                    <div className="col-12 col-md-6 d-flex h-100 align-items-center ">
                      <img src="/assets/img/bim.png" className="img-fluid animated-img project-img" alt=" " style={{ height: "390px", width: "600px", borderRadius: "15px" }} />
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="d-flex h-100 flex-column justify-content-center">
                      <h2>Building Information Modeling (BIM)</h2>
                      <br></br>
                      <p>
                        Building Information Modeling (BIM) is at the heart of modern construction, providing digital representations of a project's physical and functional characteristics. Our BIM solutions ensure detailed 3D models that streamline collaboration, reduce errors, and enhance project outcomes:
                      </p>
                    </div>
                    </div>
                  </div>
                  <div className="container" style={{ marginTop: "20px",paddingLeft:"-100px"}}>
                    <div className="row">
                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">3D Visualization</h5>
                            <p className="card-text" style={{color:"white"}}>Create comprehensive models of your projects that allow for better visualization and understanding before breaking ground.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Coordination & Clash Detection</h5>
                            <p className="card-text" style={{color:"white"}}>Identify potential conflicts in design early, ensuring smooth coordination between different trades and disciplines.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Cost & Time Efficiency</h5>
                            <p className="card-text" style={{color:"white"}}>Optimize construction timelines and budgets with accurate data and

                              scenario simulations.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mt-4">
                        <div className="card hover-effect custom-rounded-card">
                          <div className="card-body">
                            <h5 className="card-title">Collaborative Platform</h5>
                            <p className="card-text" style={{color:"white"}}>Allow architects, engineers, and contractors to work together in a shared environment and improving decision-making.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          
        <p  style={{marginBottom:"0px"}}>
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

        {/* <div className="row">
            <div className="col-12 col-md-6">
            <img src="/assets/img/pms.png" className="img-fluid animated-img project-img" alt=" " style={{height:"340px",width:"600px",borderRadius: "15px"}} />
            </div>
            <div className="col-12 col-md-6" style={{marginTop:"150px"}}>
            <h2>Project Management Solutions (PMS)</h2>
            <br></br>
            <p>
            Our Project Management Solutions (PMS) empower construction teams with real-time collaboration, task management, and streamlined communication. We help you oversee every aspect of your project, from planning to completion, with:
            <li style={{marginBottom:"10px",marginTop:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Task Scheduling & Allocation:</strong> Keep your projects on track with detailed task schedules, resource allocation, and real-time updates.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Collaboration Tools:</strong> Enhance teamwork with integrated communication tools, ensuring everyone from site teams to office managers stays aligned.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Cost & Risk Management:</strong> identify potential risks and control costs throughout the lifecycle of your construction projects.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Performance Analytics:</strong> Access in-depth analytics to make informed decisions and optimize your project's success.
            </li>
            </p>

            </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-6">
            <img src="/assets/img/dms.png" className="img-fluid animated-img project-img" alt=" " style={{height:"370px",width:"600px",borderRadius: "15px"}} />
            </div>
            <div className="col-12 col-md-6">
            <h2>Document Management Solutions (DMS)</h2>
            <br></br>
            <p>
            With MacroLoop's Document Management Solutions (DMS), handling construction documents becomes seamless. We provide a secure, centralized platform for managing all project documents, ensuring easy access, compliance, and accuracy:
            
            <li style={{marginBottom:"10px",marginTop:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Centralized Storage:</strong> Access all your project documents in one secure location, from contracts and drawings to change orders and site reports.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Version Control:</strong> Eliminate confusion and errors with real-time version control and document tracking, ensuring the entire team always works from the latest version.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Permission-based Access:</strong> Maintain control over who can view, edit, and approve documents, ensuring data security and project integrity.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Seamless Integration: </strong>Our DMS integrates with popular construction management tools, enhancing your workflow without disruption.
            </li>
            </p>

            </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-6">
            <img src="/assets/img/bim.png" className="img-fluid animated-img project-img" alt=" " style={{height:"390px",width:"600px",borderRadius: "15px"}} />
            </div>
            <div className="col-12 col-md-6">
            <h2>Building Information Modeling (BIM)</h2>
            <br></br>
            <p>
            Building Information Modeling (BIM) is at the heart of modern construction, providing digital representations of a project's physical and functional characteristics. Our BIM solutions ensure detailed 3D models that streamline collaboration, reduce errors, and enhance project outcomes:
            
            <li style={{marginBottom:"10px",marginTop:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>3D Visualization:</strong> Create comprehensive models of your projects that allow for better visualization and understanding before breaking ground.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Coordination & Clash Detection:</strong> Identify potential conflicts in design early, ensuring smooth coordination between different trades and disciplines.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Cost & Time Efficiency:</strong> Optimize construction timelines and budgets with accurate data and
            scenario simulations.
            </li>
            <li style={{marginBottom:"10px"}}>
            &#8226; <strong style={{fontWeight:450}}>Collaborative Platform: </strong>Allow architects, engineers, and contractors to work together in a
            shared environment, improving decision-making and reducing rework.
            </li>
           
            </p>

            </div>
            </div> */}


        {  /*<h2>Cutting-Edge AI-Powered Cloud Infrastructure</h2>
           <p className="pt-20">
            Our AI-driven cloud infrastructure enables stakeholders to access intricate project insights from anywhere
            in the world, delivering unparalleled operational feasibility and real-time decision-making capabilities. LoopTech offers advanced construction information technology and project management solutions that are
            designed to empower large-scale construction projects with cutting-edge end-to-end technologies. Our
            comprehensive solutions cover:
            </p>

            <ul className="solutions_page_list">
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Managerial and engineering feasibility</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Precise inventory and vendor management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Meticulous document control </li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Finance and budgeting</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Planning and design</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Labor and staff management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Asset performance management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Project portfolio management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Finance data management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Construction safety and risk management</li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Supplier relationship management  </li>
              <li className="icon"><i className="fa fa-angle-double-right icon" aria-hidden="true"></i> Document management</li>
            </ul>

            <p>
            These solutions are complemented by our collaborative BIM technology, widely utilized in leading
            infrastructure companies, enabling seamless collaboration among project stakeholders and facilitating
            powerful process automation and workflows, while our BIM/ERP integrations ensure seamless data flow
            and enhanced project management. 
           </p> 
           
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
           </p> */}

      </div>

      {/* <!-- cta are  --> */}
      <CtaArea />
      {/* <!-- cta end --> */}
    </>
  );
};

export default ContentArea;