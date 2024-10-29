import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    icon: "/assets/img/icons/IOT.png",
    icon: "/assets/img/icons/IOT.png",
    link: "/solutions/Digital-Transformation/IOT-Solutions",
    img: "/assets/img/services/seo-sv-img-4.jpg",
    title: "IOT SOLUTIONS",
    des: <>Our solutions streamline operations, automate processes, and optimize resource allocation, allowing businesses to focus on core activities.</>,
    counter: "",
    delay: ".4s"
  },

  {
    id: 2,
    icon: "/assets/img/icons/2.png",
    icon: "/assets/img/icons/2.png",
    link: "/solutions/Digital-Transformation/Robotic-Automation",
    img: "/assets/img/icons/service-icons-4.png",
    title: "AUTOMATION SOLUTIONS",
    des: <>Robotic Process Automation bots have the same digital skill sets as people—and then some.</>,
    counter: "",
    delay: ".4s",
    data_aos: "",
    duration: "",
  },

  {
    id: 3,
    icon: "/assets/img/icons/3.png",
    icon: "/assets/img/icons/3.png",
    link: "/solutions/Digital-Transformation/Metaverse-Solution",
    img: "/assets/img/icons/service-icons-5.png",
    title: "METAVERSE SOLUTIONS",
    des: <>At LoopTech, we revolutionize project management with advanced Metaverse solutions.</>,
    counter: "",
    delay: ".4s",
    data_aos: "",
    duration: "",
  },
  {
    id: 4,
    icon: "/assets/img/icons/service-icons-6.png",
    link: "/solutions/Digital-Transformation/Security-Systems",
    img: "/assets/img/icons/service-icons-6.png",
    title: "SECURITY SYSTEMS SOLUTIONS",
    des: <>In conclusion, physical security and AI-driven cyber security are critical components of business resilience.</>,
    counter: "",
    delay: ".4s",
    data_aos: "",
    duration: "",
  },
  {
    id: 5,
    icon: "/assets/img/icons/4.png",
    icon: "/assets/img/icons/4.png",
    link: "/solutions/Digital-Transformation/Infrastructure",
    img: "/assets/img/icons/service-icons-7.png",
    title: "IT INFRASTRUCTURE SOLUTIONS",
    des: <>At LoopTech, we offer a comprehensive range of IT infrastructure solutions designed to meet the evolving needs of modern businesses.</>,
    counter: "",
    delay: ".4s",
    data_aos: "fade-up",
    duration: "2500",
  },
  {
    id: 6,
    icon: "/assets/img/icons/5.png",
    icon: "/assets/img/icons/5.png",
    link: "/solutions/Digital-Transformation/Infrastructure",
    img: "/assets/img/icons/service-icons-7.png",
    title: "HRMS SOLUTIONS",
    des: <>At looptech, we offer a streamlining workforce management with our future-ready HRMS platform.</>,
    counter: "",
    delay: ".4s",
    data_aos: "fade-up",
    duration: "2500",
  },
  // {
  //     id: 6,
  //     icon: "/assets/img/icons/service-icons-8.png",
  //     link: "#",
  //     img: "/assets/img/icons/service-icons-8.png",
  //     title: "Website Development",
  //     des: <>Our typical customer doesn’t want to be distracted by IT Services that don’t add direct value to their customers.</>,
  //     counter: "", 
  //     delay: ".4s",
  //     data_aos: "fade-up",
  //     duration: "2500",
  // }, 
]



const ContentArea = () => {



  const [hover, setHover] = React.useState(-1)


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
                  <video src="/assets/img/solutions/Digital.mp4" alt="Metaverse" autoPlay loop muted playsInline
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

          <h2>Industry Automation</h2>
          <p className="pt-20">
            MacroLoop Technologies specializes in digital transformation, empowering businesses to thriveintoday's fast-paced environment. By integrating cutting-edge technologies, they enable
            organizations to enhance operational efficiency, improve safety standards, and streamline
            workforce management. Their approach focuses on leveraging innovative solutions that driveengagement and foster growth, ensuring companies remain competitive in an ever-evolving
            market.
          </p>

          <div className="tp-it-service serive-page-item-title pt-30 pb-90">
            <div className="container">
              <div className="row it-sv-counter">
                {service_data.map((item, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-md-6"
                    data-aos={item.data_aos}
                    data-aos-duration={item.duration}
                  >
                    <div className="it-service__item mb-30 text-center">
                      <div className="it-servicce__item-img mb-35">
                        <img src={item.icon} alt="them-pure" />
                      </div>
                      <h3 className="it-service__item-title mb-20">
                        <a href={item.link}>{item.title}</a>
                      </h3>
                      <p className="mb-0">{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 
          <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/Auto.jpg" alt="" />
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
