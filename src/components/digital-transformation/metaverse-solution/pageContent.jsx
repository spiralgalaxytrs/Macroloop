import React from "react";
import Cta from "../../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";
import LHfooter from "../../portfolio-details/lhfooter"

// Why_choose_us
const Why_choose_us = [
  {
    id: 1,
    lists: [
      <>Innovative Technology: Cutting-edge VR and AR for unparalleled insights.</>,
      <>Industry Expertise: Proven track record with leading companies.</>,
    ]
  },
  {
    id: 2,
    lists: [
      <>Comprehensive Solutions: From design visualization to workforce upskilling.</>,
      <>Seamless Integration: Smooth data flow with various systems.</>,
    ]
  }
]

const working_process_data = [
  [
    {
      id: 1,
      img: "/assets/img/metaverse/card1.png",
      title: "Immersive Design Visualization",
      lists: [
        <><b>3D Modeling:</b> Bring your concepts to life with dynamic, real-time 3D models.</>,
        <><b>VR Walkthroughs:</b> Experience immersive design walkthroughs for better decision-making.</>,
      ],
      desctiption: "Bring your concepts to life with dynamic, real-time 3D models.VR Walkthroughs: Experience immersive design walkthroughs for better decision-making.",
    },
    {
      id: 2,
      img: "/assets/img/metaverse/2.png",
      title: "Collaborative Workspace",
      lists: [
        <><b>Digital Space:</b> Enhance teamwork with real-time communication, file sharing, and virtual meetings.</>,
        <><b>AR Models:</b> Overlay models on-site for real-time adjustments.</>
      ],
      desctiption: "Enhance teamwork with real-time communication, file sharing, and virtual meetings.AR Models: Overlay models on-site for real-time adjustments.",
    },
    {
      id: 3,
      img: "/assets/img/metaverse/3.png",
      title: "Enhanced Client Experience",
      lists: [
        <><b>3D Exploration:</b> Immerse clients in 3D environments to explore and customize products.</>,
        <><b>Safety Training:</b> Reduce accidents with immersive VR safety protocols.</>
      ],
      desctiption: "Immerse clients in 3D environments to explore and customize products.Safety Training: Reduce accidents with immersive VR safety protocols.",
    },
    {
      id: 4,
      img: "/assets/img/metaverse/4.png",
      title: "Personalized Interiors",
      lists: [
        <><b>Custom Design:</b> Enable real-time customization through user-friendly VR interfaces.</>,
        <><b>Virtual Showrooms:</b> Facilitate design exploration with immersive virtual environments.</>
      ],
      desctiption: "Enable real-time customization through user-friendly VR interfaces.Virtual Showrooms: Facilitate design exploration with immersive virtual environments.",
    }
  ],
  [
    {
      id: 5,
      img: "/assets/img/metaverse/5.png",
      title: "Workforce Upskilling",
      lists: [
        <><b>Remote Tours:</b> Collaborate and make decisions with virtual site tours.</>,
        <><b>AR Assistance:</b> Receive remote help through augmented reality technology.</>
      ],
      desctiption: "Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability.",
    },
    {
      id: 6,
      img: "/assets/img/metaverse/6.png",
      title: "Boost Productivity and Profitability  ",
      lists: [
        <>Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability. </>
      ],
      desctiption: "Gain complete control and visibility over your projects with LoopTech’s Metaverse solutions, ensuring enhanced productivity and profitability.",
    },
    {
      id: 7,
      img: "/assets/img/metaverse/7.png",
      title: "Experience the Future",
      lists: [
        <>Discover how LoopTech can elevate your projects with cutting-edge Metaverse technology.]</>
      ],
      desctiption: "At LoopTech, we revolutionize project management with advanced Metaverse solutions. Our immersive VR and AR tools ensure efficient execution and real-time decision-making. Trusted by industry leaders, we are the best choice for your needs.",
    },
  ],
]


const ContentArea = () => {
  const [hover, setHover] = React.useState(-1);
  const images = [
    "/assets/img/portfolio/pf-details-gl-1.jpg",
    "/assets/img/portfolio/pf-details-gl-2.jpg",
    "/assets/img/portfolio/pf-details-gl-3.jpg",
  ];

  return (
    <>
      <div className="tp-pf-details-page-area dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  overflow: "hidden",
                }}
              >
                <Link href="/contact">
                  <video
                    src="/assets/img/solutions/Metaverse.mp4"
                    alt="Metaverse"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-30">
        <div className="container">
          <p className="pt-20 mb-60" style={{ fontSize: "20px" }}>
            We offer a comprehensive range of services designed to harness the power of the Metaverse and
            immersive technologies. Our expertise covers 360 VR Video Production, Interactive Virtual Reality
            (VR), Augmented Reality (AR) Development, and Extended Reality (XR) Experiences. In addition, we
            provide XR Consulting to help businesses seamlessly integrate these advanced technologies into
            their operations, enhancing customer engagement, productivity, and digital transformation.
          </p>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow">
            <div className="col-lg-7  pb-3 pt-lg-5 pt-3" >
              <h2 className="text-primary pt-lg-3">360 VR Video Production</h2>
              <h5 className="pt-1">Capture Reality in Full Immersion</h5>
              <p className="pt-15 mb-0">
                Step into a new dimension of storytelling with our 360 VR Video Production services. We create
                high-quality, immersive 360-degree videos that transport your audience into the heart of the
                action, providing unparalleled engagement for marketing, events, training, and more.
              </p>
            </div>
            <div className="col-lg-5">
              <Image src={`/assets/img/metaverse/card1.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3">
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card2.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">Interactive VR</h2>
              <h5 className="pt-1">Interactive Virtual Worlds at Your Fingertips</h5>
              <p className="pt-15 mb-0">
                Our Interactive VR solutions allow users to go beyond passive viewing and actively engage with
                virtual environments. From simulations to interactive games, we design VR experiences that are
                fully customizable, delivering immersive and hands-on interactions for your business or project.
              </p>
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3">
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">AR Development</h2>
              <h5 className="pt-1">Augment Your Reality with Cutting-Edge AR Solutions</h5>
              <p className="pt-15 mb-0">
                Blend the physical and digital worlds with our Augmented Reality (AR) development services.
                Whether it's for product visualization, retail, training, or entertainment, we create AR
                experiences that enhance real-world environments and bring your content to life in unique,
                engaging ways.
              </p>
            </div>
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card3.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3">
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card4.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">XR Consulting</h2>
              <h5 className="pt-1">Expert Guidance for Navigating Extended Reality</h5>
              <p className="pt-15 mb-0">
                Looking to integrate XR (Extended Reality) into your business strategy? Our XR Consulting
                services provide deep industry knowledge and actionable insights to help you harness the full
                potential of immersive technologies, whether it's VR, AR, or MR. Let us guide your journey into
                the Metaverse.
              </p>
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3">
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">XR Experiences</h2>
              <h5 className="pt-1">Designing Immersive Experiences for the Future</h5>
              <p className="pt-15 mb-0">
                Create unforgettable immersive environments with our XR Experience services. From virtual
                showrooms to interactive events and entertainment, we bring your ideas to life with seamless
                integration of VR, AR, and MR technologies to engage and captivate your audience.
              </p>
            </div>
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card5.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3">
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card6.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
            </div>
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">XR Training</h2>
              <h5 className="pt-1">Revolutionizing Learning with XR Training</h5>
              <p className="pt-15 mb-0">
                Empower your team with immersive XR Training solutions. We develop custom VR and AR training
                programs that simulate real-world scenarios, making learning more effective and engaging for
                industries like healthcare, manufacturing, and education.
              </p>
            </div>
          </div>

          <div className="row border pe-lg-5 py-2 border-3 rounded-3 shadow mt-3 mb-4">
            <div className="col-lg-7  pb-3 pt-lg-5" >
              <h2 className="text-primary pt-lg-3">VR/AR Tech Support</h2>
              <h5 className="pt-1">Comprehensive Tech Support for Immersive Solutions</h5>
              <p className="pt-15 mb-0">
                Ensure smooth operation of your VR and AR systems with our expert technical support services.
                From troubleshooting to system upgrades, our dedicated team provides ongoing support to keep
                your immersive solutions running seamlessly.
              </p>
            </div>
            <div className="col-lg-5">
               <Image src={`/assets/img/metaverse/card7.jpg`} width={475} height={325} alt="pure" style={{width:"100%"}} />
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
