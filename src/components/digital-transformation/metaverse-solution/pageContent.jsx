import React from "react";
import Cta from "../../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";
import LHfooter from "../../portfolio-details/lhfooter"

// Why_choose_us
const Why_choose_us = [
    {
      id:1, 
      lists : [
        <>Innovative Technology: Cutting-edge VR and AR for unparalleled insights.</>,
        <>Industry Expertise: Proven track record with leading companies.</>,
      ]
    },
    {
      id:2, 
      lists : [
        <>Comprehensive Solutions: From design visualization to workforce upskilling.</>,
        <>Seamless Integration: Smooth data flow with various systems.</>,
      ]
    }
]

const working_process_data = [
  [
    {
      id: 1,
      img:"/assets/img/metaverse/1.png",
      title: "Immersive Design Visualization",
      lists : [
        <><b>3D Modeling:</b> Bring your concepts to life with dynamic, real-time 3D models.</>,
        <><b>VR Walkthroughs:</b> Experience immersive design walkthroughs for better decision-making.</>,
      ],
      desctiption: "Bring your concepts to life with dynamic, real-time 3D models.VR Walkthroughs: Experience immersive design walkthroughs for better decision-making.",
    },
    {
      id: 2,
      img:"/assets/img/metaverse/2.png",
      title: "Collaborative Workspace",
      lists : [
        <><b>Digital Space:</b> Enhance teamwork with real-time communication, file sharing, and virtual meetings.</>,
        <><b>AR Models:</b> Overlay models on-site for real-time adjustments.</>
      ],
      desctiption: "Enhance teamwork with real-time communication, file sharing, and virtual meetings.AR Models: Overlay models on-site for real-time adjustments.",
    },
    {
      id: 3,
      img:"/assets/img/metaverse/3.png",
      title: "Enhanced Client Experience",
      lists : [
        <><b>3D Exploration:</b> Immerse clients in 3D environments to explore and customize products.</>,
        <><b>Safety Training:</b> Reduce accidents with immersive VR safety protocols.</>
      ],
      desctiption: "Immerse clients in 3D environments to explore and customize products.Safety Training: Reduce accidents with immersive VR safety protocols.",
    },
    {
      id: 4,
      img:"/assets/img/metaverse/4.png",
      title: "Personalized Interiors",
      lists : [
        <><b>Custom Design:</b> Enable real-time customization through user-friendly VR interfaces.</>,
        <><b>Virtual Showrooms:</b> Facilitate design exploration with immersive virtual environments.</>
      ],
      desctiption: "Enable real-time customization through user-friendly VR interfaces.Virtual Showrooms: Facilitate design exploration with immersive virtual environments.",
    }
  ],
  [
    {
      id: 5,
      img:"/assets/img/metaverse/5.png",
      title: "Workforce Upskilling",
      lists : [
        <><b>Remote Tours:</b> Collaborate and make decisions with virtual site tours.</>,
        <><b>AR Assistance:</b> Receive remote help through augmented reality technology.</>
      ],
      desctiption: "Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability.",
    },
    {
      id: 6,
      img:"/assets/img/metaverse/6.png",
      title: "Boost Productivity and Profitability  ",
      lists : [
        <>Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability. </>
      ],
      desctiption: "Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability.",
    },
    {
      id: 7,
      img:"/assets/img/metaverse/7.png",
      title: "Experience the Future",
      lists : [
        <>Discover how LoopTech can elevate your projects with cutting-edge Metaverse technology.]</>
      ],
      desctiption: "At LoopTech, we revolutionize project management with advanced Metaverse solutions. Our immersive VR and AR tools ensure efficient execution and real-time decision-making. Trusted by industry leaders, we are the best choice for your needs.",
    },
  ],
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
                  <video src="/assets/img/solutions/Metaverse.mp4" alt="Metaverse" autoPlay loop muted playsInline
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

      <div className="tp-pf-detials-main dark-bg pt-30">
        <div className="container wow tpfadeUp">
          <p className="pt-20 mb-60">
            At LoopTech, we collaborate with industry leaders to integrate cutting-edge VR and AR
            technologies, delivering innovative Metaverse solutions for Industry 4.0. Our solutions
            streamline project management, enhance decision-making, and provide immersive design
            experiences, enabling clients to optimize resources and improve productivity. Leveraging
            technologies like IoT, AI, and big data, we empower businesses to gain deeper insights, 
            automateprocesses, and unlock new opportunities for innovation. With comprehensive strategic 
            support, we guide you through your digital transformation journey, ensuring your success in 
            the rapidly evolving Metaverse landscape.
          </p>

          <h2>Transform Your Projects with LoopTech</h2>
          <p className="pt-20 mb-60">
            At LoopTech, we revolutionize project management with advanced Metaverse solutions. Our immersive VR and AR tools ensure efficient execution and real-time decision-making. Trusted byindustry leaders, we are the best choice for your needs.
          </p>

          <h2>Why Choose LoopTech?</h2>
          <p className="pt-20">
            Cutting-edge VR and AR for unparalleled insights.Industry Expertise: Proven track record with leading companies.Comprehensive Solutions: From design visualization to workforce upskilling.Seamless Integration: Smooth data flow with various systems.",
          </p>
          <div className="pf-deatials-fea mb-60">
            <div className="row mt-60">
              {Why_choose_us.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="tp-bs-about-fea border-bottom-0 mr-30">
                    <ul>
                      {item.lists.map((list, i) => (
                        <li>
                          <i className="fal fa-check"></i>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="pb-60">LoopTech Metaverse Solutions</h2>
            {/* <div className="pf-dt-process-wrapper pb-60 container pt-40">
            <div className="row row-cols-2 justify-content-evenly">
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
                    <h3 className="pf-dt-process-item__title mt-20 mb-10" style={{ fontFamily: "Metropolis", letterSpacing: "0.7px" }}>
                      <a href="#">{item.title}</a>{" "}
                    </h3>
                    <p className="text-justify mt-5" style={{ fontFamily: "Metropolis", letterSpacing: "0.7px", lineHeight: '30px' }}>{item.desctiption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* <h2>Experience the Future</h2>
          <p className="pt-20">
            Discover how LoopTech can elevate your projects with cutting-edge Metaverse technology.
          </p> */}

          {/* <div className="pt-20 solution_sponsor">
            <span>Powered By</span>
          </div>
          <div className="pt-20 pb-100">
            <img className="solutions_sponsor_img3" src="/assets/img/brand/cisco.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/ibm.png" alt="" />
            <img className="solutions_sponsor_img3" src="/assets/img/brand/Auto.jpg" alt="" />
          </div> */}
        </div>
        
        <div className="tp-pf-detials-main dark-bg pt-30">
          <div className="wow tpfadeUp">
            <div className="pf-dt-process-wrapper pb-60">
              {working_process_data.map((items, i) => (
                <div className="row row-cols-4 justify-content-evenly">
                  {items.map((item,index)=>(
                    <div key={i} className="col" style={{width:'350px'}} >
                      <div 
                        onMouseEnter={()=>{
                          setHover(i);
                        }}
                        onMouseLeave={()=>{
                          setHover(-1);
                        }}
                        className={`pf-dt-process-item wow tpfadeUp mb-60 overflow-hidden zoomInEffect rounded ${ hover==i ? 'shadow-lg' : 'shadow' } d-flex flex-column gap-2 justify-content-center align-items-center`}
                        style={{padding:'40px',height: '700px'}}
                      >
                        <Image src={item.img} width={250} height={250} alt="pure" />   
                        <h3 className="pf-dt-process-item__title text-center mt-auto mb-auto"style={{letterSpacing:"0.7px",height: '50px' }}>
                          <a href="#">{item.title}</a>{" "}
                        </h3>
                        {item.lists.map((list, i) => (
                          <p className={`text-justify mt-0 mb-auto pb-20`} style={{letterSpacing:"0.7px",lineHeight: '30px' }}>{list}</p>
                        ))}
                        {/* <div className="tp-bs-about-fea border-bottom-0 mr-30">
                          <ul>
                            {item.lists.map((list, i) => (
                              <li>
                                <i className="fal fa-check"></i>
                                {list}
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- cta are  --> */}
        <Cta />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;
