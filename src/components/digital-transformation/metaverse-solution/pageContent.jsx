import React from "react";
import Cta from "../../homes/home-5/cta";
import Link from "next/link";



const working_process_data = [
  {
    id: 1,
    title: "Transform Your Projects with LoopTech",
    desctiption: "At LoopTech, we revolutionize project management with advanced Metaverse solutions. Our immersive VR and AR tools ensure efficient execution and real-time decision-making. Trusted by industry leaders, we are the best choice for your needs.",

  },
  {
    id: 2,
    title: "Why Choose LoopTech?",
    desctiption: "Innovative Technology: Cutting-edge VR and AR for unparalleled insights.Industry Expertise: Proven track record with leading companies.Comprehensive Solutions: From design visualization to workforce upskilling.Seamless Integration: Smooth data flow with various systems.",

  },
  {
    id: 3,
    title: "Immersive Design Visualization",
    desctiption: "3D Modeling: Bring your concepts to life with dynamic, real-time 3D models.VR Walkthroughs: Experience immersive design walkthroughs for better decision-making.",

  },
  {
    id: 4,
    title: "Collaborative Workspace",
    desctiption: "Digital Space: Enhance teamwork with real-time communication, file sharing, and virtual meetings.AR Models: Overlay models on-site for real-time adjustments.",

  },
  {
    id: 5,
    title: " Enhanced Client Experience",
    desctiption: "3D Exploration: Immerse clients in 3D environments to explore and customize products.Safety Training: Reduce accidents with immersive VR safety protocols.",

  },
  {
    id: 6,
    title: " Personalized Interiors",
    desctiption: "Custom Design: Enable real-time customization through user-friendly VR interfaces.Virtual Showrooms: Facilitate design exploration with immersive virtual environments.",

  },
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

          <h2>Introduction for Metaverse Solution:</h2>
          <p className="pt-20">
            At LoopTech, we collaborate with industry leaders to integrate cutting-edge VR and AR technologies, delivering innovative Metaverse solutions for Industry 4.0. Our solutions streamline project management, enhance decision-making, and provide immersive design experiences, enabling clients to optimize resources and improve productivity. Leveraging technologies like IoT, AI, and big data, we empower businesses to gain deeper insights, automate processes, and unlock new opportunities for innovation.
            With comprehensive strategic support, we guide you through your digital transformation journey, ensuring your success in the rapidly evolving Metaverse landscape.
          </p>

          <h2>LoopTech Metaverse Solutions</h2>
          <div className="pf-dt-process-wrapper pb-60 container pt-40">
            <div className="row row-cols-5 justify-content-evenly">
              {working_process_data.map((item, i) => (
                <div key={i} className="col" style={{ width: '400px' }}>
                  <div
                    onMouseEnter={() => {
                      setHover(i);
                    }}
                    onMouseLeave={() => {
                      setHover(-1);
                    }}
                    className={`pf-dt-process-item wow tpfadeUp mb-60 zoomInEffect rounded ${hover == i ? 'shadow-lg' : 'shadow'} ${hover == i ? 'border-top border-info border-3' : ''} d-flex flex-column gap-2 justify-content-start align-items-center`}
                    style={{ padding: '40px', height: '400px' }}
                  >
                    {/* <Image src={item.img} width={250} height={250} alt="pure" /> */}
                    <h3 className="pf-dt-process-item__title mt-20 mb-10" style={{ fontFamily: "Metropolis", letterSpacing: "0.7px" }}>
                      <a href="#">{item.title}</a>{" "}
                    </h3>
                    <p className="text-justify mt-5" style={{ fontFamily: "Metropolis", letterSpacing: "0.7px", lineHeight: '30px' }}>{item.desctiption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2>Boost Productivity and Profitability</h2>
          <p className="pt-20">
            Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability.
          </p>

          <h2>Experience the Future</h2>
          <p className="pt-20">
            Discover how LoopTech can elevate your projects with cutting-edge Metaverse technology.
          </p>

          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/Auto.jpg" alt="" />
          </div> */}
        </div>

        {/* <!-- cta are  --> */}
        <Cta />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;