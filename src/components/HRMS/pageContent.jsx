import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";

const ContentArea = () => {

  const Features = [
    {
      id: 1,
      color:"red",
      title: "Max Recruit",
      description: "Efficient recruitment for exceptional talant",
    },
    {
      id: 2,
      color:"blue",
      title: "Max Foundation",
      description: "Single source of employee data from hire to retire",
    },
    {
      id: 3,
      color:"green",
      title: "Max Workforce",
      description: "Manage and track employees with efficiency",
    },
    {
      id: 4,
      color:"orange",
      title: "Max Engage",
      description: "Your finger on the employee's pulse",
    },
    {
      id: 5,
      color:"lightgreen",
      title: "Max Payroll",
      description: "Effectively manage compensation and benefits",
    },
    {
      id: 6,
      color:"#8F00FF",
      title: "Max Talent",
      description: "Align employee performance to company goals",
    },
    {
      id: 7,
      color:"yellow",
      title: "Max Learn",
      description: "Upskill and reskill employees for better growth",
    },
    {
      id: 8,
      color:"gray",
      title: "Max Insight",
      description: "Greater insights with effective dashboards",
    }
  ]

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
                  <video src="/assets/img/solutions/HRMS.mp4" alt="Metaverse" autoPlay loop muted playsInline
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

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp">
          {/* <h2>Introduction</h2> */}
          <p className="pt-20">
            At MacroLoop Technologies, we understand that efficient Human Resource Management is the
            backbone of any successful organization. Our comprehensive, future-ready HRMS platformis
            designed to streamline your workforce management and elevate employee engagement. Our 
            HumanResource Management System (HRMS) goes beyond conventional solutions, offering a fully
            integrated platform that covers every aspect of HR from hire to retire.
          </p>

          <h3>Why Choose MAX HCM suite?</h3>
          <p className="pt-20">            
            In a rapidly evolving business landscape, organizations need adaptable, scalable, 
            and user-friendly HRtools. MAX HCM suite empowers your business with intelligent features 
            that simplify HR processes, improve productivity, and ensure compliance. Whether you're 
            managing a global workforce or a growing startup, our solutions are tailored to your 
            unique business needs, ensuring seamless operations across all levels. 
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

          <h3>Seamless Integration Across All Platforms</h3>
          <p className="pt-20">
            Our HCM platform is designed to integrate seamlessly with your existing business software, 
            including ERP, CRM, and other third-party systems, ensuring that you get a unified and 
            comprehensive approach to HR management. Whether you're accessing the platform from a 
            desktop or mobile device, MAX HCM suite provides a consistent and intuitive experience for 
            both HR professionals andemployees. 
          </p>
          
          {/* <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="img-container p-3 mb-4 rounded">
                  <img src="/assets/img/solutions/HCM2.png" className="img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </div> */}

          <div className="container m-20 py-60">
            <div className="row">
              {Features.map((feature,i)=>(
                <div key={i} className="col-lg-3 col-md-4 col-6">
                  <div className="content-container" style={{ borderLeft: `5px solid ${feature.color}`, }}>
                    <div className="border-box ps-3">
                      <h4>{feature.title}</h4>
                      <p className="pt-20">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> 

          <h3>Tailored for All Industries</h3>
          <p className="pt-20">
            No matter your industry, our HRMS platform is adaptable to the unique requirements of your
            business. We provide scalable solutions for industries such as manufacturing, healthcare, 
            IT, and more, ensuring that your HR processes are aligned with the specific challenges and 
            opportunities of your sector. At MacroLoop Technologies, we’re committed to driving the future 
            of HR management with innovative, scalable, and user-friendly solutions. Let us help you unlock 
            the full potential of your workforce with a platform built for efficiency, accuracy, and growth. 
            Connect with us today to learn more about how MAX HCM suite can transform your HR operations.
          </p>


          {/* <h3>Platform Capabilities: A Closer Look</h3> */}
          {/* <p className="pt-20">
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
          </ul>

          <h3>Maximizing ROI with Expertise & Scalability</h3>
          <p className="pt-20">
            Benefit from our extensive HR experience. Our platform is built to deliver assured ROI, thanks to its <b>scalable, extensible,</b> and <b>easy-to-integrate</b> architecture.
            Enjoy a <b>comprehensive view</b> of your HR operations while maintaining <b>information and data security</b> at all times.
          </p> */}

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
{/* 
          <h3>The Future of HR is Here, with MacroLoop Technologies</h3>
          <p className="pt-20">
            Our HR Tech platform is more than just a tool—it’s the future of HR.
            With a <b>modular build and deployment,</b> we ensure you get exactly what your organization needs, whether you're scaling for growth or looking for efficiency gains.
          </p> */}

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
