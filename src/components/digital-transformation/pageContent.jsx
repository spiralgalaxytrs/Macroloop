import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    icon: "/assets/img/services/seo-sv-img-4.jpg",
    link: "/solutions/Digital-Transformation/IOT-Solutions",
    img: "/assets/img/services/seo-sv-img-4.jpg",
    title: "IOT SOLUTION",
    des: <>Our solutions streamline operations, automate processes, and optimize resource allocation, allowing businesses to focus on core activities.</>,
    counter: "", 
    delay: ".4s"
},

{
    id: 2,
    icon: "/assets/img/icons/service-icons-4.png",
    link: "/solutions/Digital-Transformation/Robotic-Automation",
    img: "/assets/img/icons/service-icons-4.png",
    title: "ROBOTIC AUTOMATION",
    des: <>Robotic Process Automation bots have the same digital skill sets as people—and then some.</>,
    counter: "", 
    delay: ".4s",
    data_aos: "",
    duration: "",
},

{
    id: 3,
    icon: "/assets/img/icons/service-icons-5.png",
    link: "/solutions/Digital-Transformation/Metaverse-Solution",
    img: "/assets/img/icons/service-icons-5.png",
    title: "METAVERSE SOLUTION",
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
    title: "SECURITY SYSTEMS",
    des: <>In conclusion, physical security and AI-driven cyber security are critical components of business resilience.</>,
    counter: "", 
    delay: ".4s",
    data_aos: "",
    duration: "",
},
{
    id: 5,
    icon: "/assets/img/icons/service-icons-7.png",
    link: "/solutions/Digital-Transformation/Infrastructure",
    img: "/assets/img/icons/service-icons-7.png",
    title: "IT INFRASTRUCTURE",
    des: <>At LoopTech, we offer a comprehensive range of IT infrastructure solutions designed to meet the evolving needs of modern businesses.</>,
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
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  <Link href="/contact">
                    <img src="/assets/img/solutions/DigT.gif" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg">
        <div className="container wow tpfadeUp">

          <h2>Industry Automation</h2>
          <p className="pt-20">
            We collaborate with leading OEMs to integrate cutting-edge technologies and provide innovative Industry 4.0 solutions, helping customers solve challenges and enhance productivity. Our solutions streamline operations, automate processes, and optimize resource allocation, allowing businesses to focus on core activities.
            By leveraging technologies like IoT, AI, big data analytics, and cloud computing, we enable clients to achieve greater efficiency and operational insights. Additionally, we offer strategic support to guide their digital transformation, empowering them to thrive in the competitive, digital landscape.
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