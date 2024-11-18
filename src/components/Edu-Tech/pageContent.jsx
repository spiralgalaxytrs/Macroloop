import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";

// working_process_data 
const Edu_Tech_data = [
  {
      id: 1,
      img:  "/assets/img/eduTech/1.png",
      title: " Automation Technology",
      desctiption: "Our comprehensive training in automation technology encompasses the latest advancements in industrial automation, robotics, and control systems. Students gain practical experience in programming andoperating automated systems, preparing them for careers in manufacturing, process control, and industrial engineering."
  },
  {
      id: 2,
      img:"/assets/img/eduTech/2.png",
      title: "Building Management Training",
      desctiption: "In our building management training programs, students learn to optimize building performance through efficient energy management, sustainable design, and smart building technologies. They gain insights into HVAC systems, building automation, and environmental controls, preparing them for roles in facility management and sustainable construction practices.",

  },
  {
      id: 3,
      img:"/assets/img/eduTech/3.png",
      title: "Electrical Power Engineering",
      desctiption: "Through our electrical power engineering training, students delve into power generation, transmission, and distribution systems. They develop a thorough understanding of electrical infrastructure, renewable energy integration, and power electronics, preparing them for careers in power utilities, renewable energy firms, and electrical engineering.",

  },
  {
      id: 4,
      img:"/assets/img/eduTech/4.png",
      title: "Automotive and EV Technologies",
      desctiption: "Our hands-on training in automotive and electric vehicle technologies covers vehicle electronics, powertrains, and advanced propulsion systems. Students gain practical skills in electric vehicle design and maintenance, positioning them at the forefront of the automotive industry's shift towards electric andsustainable transportation solutions.",

  },
  {
    id: 5,
    img:"/assets/img/eduTech/5.png",
    title: "Microcomputers, IoT, and IIoT",
    desctiption: "Students are immersed in the world of microcomputers, the Internet of Things (IoT), and the Industrial Internet of Things (IIoT). They gain practical experience in sensor networks, data analytics, and embedded systems, preparing them for careers in smart technologies, automation, and connected devices.",

},
{
    id: 6,
    img:"/assets/img/eduTech/6.png",
    title: "Machinery and System Engineering",
    desctiption: " Our training in machinery and system engineering equips students with the skills to design, analyze, and optimize complex machinery and systems for various industrial applications. They gain insights into mechanical design, automation, and industrial processes, preparing them for roles in manufacturing, product development, and system integration.",

},
// {
//     id: 7,
//     img:"/assets/img/eduTech/7.png",
//     title: "Cyber security and Network Training",
//     desctiption: "Our comprehensive cyber security and network training programs cover a wide range of essential skills, from fundamental security concepts to advanced threat detection and network protection techniques. With expert instructors and hands-on training, you'll gain the knowledge and practical experience needed to excel in the dynamic and critical fields of cyber security and network security.",

// },
// {
//     id: 8,
//     img:"/assets/img/gallery/8.png",
//     title: "Showcase and Connect",
//     desctiption: "The app allows users to showcase their work, projects, or ideas, providing a platform to attract potential partners, investors, or customers and establish meaningful connections within the entrepreneurial community.",

// },
]


const ContentArea = () => {

  const [hover,setHover] = React.useState(-1)

    return (
      <>
        <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pf-details-page-banner p-relative">
                  <div className="pf-details-banner-img1 w-img w-imgggg">
                    <Link href="solutions/Edu-Tech">
                    <img src="/assets/img/solutions/ed.gif" alt="" />
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
            <h2> Edu-Tech division</h2>
            <p className="pt-30">
            At our Edu-Tech division, we are committed to providing universities with cutting-edge technologies that
            empower smart management features and offer hands-on training for students. Our focus areas include:
            Certainly! Here's the elaborated content for each focus area:
            </p>

            <div className="pf-dt-process-wrapper pb-60 container">
              <div className="row row-cols-5 justify-content-evenly">
                {Edu_Tech_data.map((item, i) => (
                  <div key={i} className="col" style={{width:'400px'}}>
                    <div 
                      onMouseEnter={()=>{
                        setHover(i);
                      }}
                      onMouseLeave={()=>{
                        setHover(-1);
                      }}
                      className={`pf-dt-process-item wow tpfadeUp mb-60 zoomInEffect rounded ${ hover==i ? 'shadow-lg' : 'shadow' } d-flex flex-column gap-2 justify-content-start align-items-center`}
                      style={{padding:'40px',height: '800px'}}
                    >
                      <Image src={item.img} width={250} height={250} alt="pure" />   
                      <h3 className="pf-dt-process-item__title mt-20 mb-10">
                        <a href="#">{item.title}</a>{" "}
                      </h3>
                      <p className="text-justify mt-5" style={{lineHeight: '30px' }}>{item.desctiption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="pt-20">
            Our organization, we are proud to have established strong partnerships with leading industry players, enabling us to offer innovative educational programs in collaboration with:
            </p>

            <h2>Lucas Nuelle Germany</h2>

            <p className="pt-20">
            Our partnership with Lucas Nuelle Germany allows us to integrate state-of-the-art training systems in key
            technologies such as automation, industry 4.0, automotive, and EV technologies into our educational
            programs. This collaboration empowers us to provide students with hands-on training using cutting-edge
            equipment, preparing them for the challenges and opportunities of the modern industrial landscape.
            </p>

            <h2>Kewaunee USA</h2>

            <p className="pt-20">
            Partnering with Kewaunee USA, we are able to enhance our laboratory infrastructure, providing students
            with access to world-class lab systems, including installation technology, power engineering, communication technology, and more. This collaboration is instrumental in fostering a practical learning
            environment and ensuring that students are equipped with the skills and knowledge demanded by industry
            standards.
            </p>

            <h2>IBM Ed-tech</h2>

            <p className="pt-20">
            Our collaboration with IBM Ed-tech focuses on leveraging advanced technologies and educational
            resources to offer specialized training programs in areas such as microcomputers, IoT, IIoT, and process
            control. Through this partnership, we aim to equip students with the expertise required to thrive in the
            digital age and the era of Industry 4.0.
            </p>

            <h2>Cisco Netacad</h2>

            <p className="pt-20">
              Partnering with Cisco Netacad enables us to deliver comprehensive training in networking, cyber security, and communication technology. This collaboration equips students with in-depth knowledge and practical
              skills in critical areas of information technology, empowering them to pursue rewarding careers in the field
              of networking and cyber security.
            </p>

            <p>
             Dedicated to teaching and enriching Industry 4.0 and future technologies, we are committed to preparing
            students for the technological advancements and challenges of tomorrow. Through our Edu-Tech division, we are dedicated to nurturing the next generation of tech-savvy professionals, providing them with the tools and knowledge to excel in their respective fields.
            </p>
            
          <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
          <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/lucas_new.png" alt="" />
          <img className="solutions_sponsor_img3" src="/assets/img/brand/KEWAUNEE.png" alt="" />
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
