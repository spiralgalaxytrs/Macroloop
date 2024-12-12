import React,{useState} from "react";
import Image from "next/image";
import CtaArea from "../../homes/home-5/cta";
import Link from "next/link";
import SwiperCore,{Navigation , Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const ContentArea = () => {
  SwiperCore.use([Autoplay]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contents = [
    {
      id: "collapseOne",
      title: "Core Technical Courses",
      list: [
        { title: "Cyber Security", img: "/assets/img/services/trail/Cyber Security.png" },
        { title: "Electric Vehicle (EV)", img: "/assets/img/services/trail/EV.png" },
        { title: "Internet of Things (IoT)", img: "/assets/img/services/trail/IoT.png" },
        { title: "Big Data Analytics", img: "/assets/img/services/trail/Big Data Analytics.png" },
        { title: "Machine Learning", img: "/assets/img/services/trail/ML[1].png" },
        { title: "Artificial Intelligence", img: "/assets/img/services/trail/AI.png" },
        { title: "AUTOSAR", img: "/assets/img/services/trail/AUTOSAR.png" },
        { title: "Agile/Scrum", img: "/assets/img/services/trail/Agile.png" },
        { title: "Embedded AI", img: "/assets/img/services/trail/Embedded AI.png" },
        { title: "VLSI", img: "/assets/img/services/trail/VLSI.png" },
        { title: "Digital Signal Processing", img: "/assets/img/services/trail/digital signal processing.png" }
      ],
    },
    {
      id: "collapseTwo",
      title: "Software & Programming",
      list: [
        { title: "MS Office", img: "/assets/img/services/trail/Microsoft office.png" },
        { title: "MATLAB Autocode Generation", img: "/assets/img/services/trail/MATLAB.png" },
        { title: "Microcontroller & Automotive", img: "/assets/img/services/trail/Microcontroller & Automotive.png" },
        { title: "Linux & RTOS", img: "/assets/img/services/trail/Linux & RTOS.png" },
        { title: "Web Technologies", img: "/assets/img/services/trail/Web Technologies.png" },
        { title: "Open Source", img: "/assets/img/services/trail/Open Source.png" },
        { title: "Relational Database Management System (RDBMS)", img: "/assets/img/services/trail/RDBMS.png" },
        { title: "Programming Languages", img: "/assets/img/services/trail/Programming Language.png" }
      ],
    }
  ]

  const contents1 = [
    {
      id: "collapseOne",
      title: "Internship/Project Internship Program",
      contentList: [
      "Our Internship Programs are designed for students who wish to gain hands-on experience in cutting- edge technology fields. These program provides students with industry exposure, live project work, and guidance from expert professionals. They aim to bridge the gap between academic knowledge and real-world industry demands, helping students enhance their practical skills and readiness for the job market."],
    },
    {
      id: "collapseTwo",
      title: "",
      list: [  
    { title: "Internship in Embedded Systems", img: "/assets/img/services/trail/embedded systems.png" },
    { title: "Internship in Internet of Things", img: "/assets/img/services/trail/IoT.png" },
    { title: "Internship in VLSI Design", img: "/assets/img/services/trail/VLSI.png" },
    { title: "Internship in Full Stack Java", img: "/assets/img/services/trail/Programming Language.png" },
    { title: "Internship in Data Science with AI/ML", img: "/assets/img/services/trail/Data Science.png" },
    { title: "Internship in Business Analytics", img: "/assets/img/services/trail/Business analytics.png" },
    { title: "Internship in Embedded AI", img: "/assets/img/services/trail/Embedded.png" },
    { title: "Internship in Cyber Security", img: "/assets/img/services/trail/Cyber Security.png" }
 
      ]
    },
    {
      id: "collapseThree",
      title: "Technical Workshops",
      contentList: [
      "Our Technical Workshop for Students offers hands-on training in various advanced technology domains such as embedded systems, IoT, AI, and data science. These workshops aim to enhance students' practical knowledge by providing exposure to real-world applications and tools. Through interactive sessions and expert guidance, students gain valuable insights into industry practices and trends, preparing them for future career opportunities in technology."],
    },
    {
      id: "collapseFour",
      title: "",
      topics: [
        {
          title: "Core Topics",
          list: [
            "Data Analytics Using Python",
            "Machine Learning",
            "Deep Learning",
            "Software Programming",
            "Modern C++",
            "IoT",
            "Embedded C",
            "Python Programming",
            "Web Development",
            "ARM - based Application Development",
            "Raspberry Pi and Arduino Applications",
          ],
        },
        {
          title: "Specialized Training",
          list: [
            "Linux Kernel Programming",
            "Automotive CAN Analysis & AUTOSAR",
            "Digital Signal Processing",
            "MATLAB & Simulink (Image, Video, Audio Processing)",
            "Model-Based Design using Simulink and Stateflow",
            "FPGA Design",
            "Wireless Physical Layer Design",
            "OFDM",
            "Digital Signal Processing with FPGA"
          ]
        }
      ]
    },
  ]

 

  

  const setting = {
    speed: 1500,
    slidesPerView: 5,
    spaceBetween: 15,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };


  const takeaways = [
    { title: "Certification", content: "Completion Certificate for all programs" },
    { title: "Learning Modes", content: "Online/Offline instructor-led sessions" },
    { title: "Hands-On Sessions", content: "Practical exposure through labs and interactive exercises" },
    { title: "Expert Coaching", content: "Guidance from industry experts" },
  ];

  const workshopContents = [
    {
      title: ["Internet of things(IoT)"],
      items: [
        "Data Analytics Using Python",
        "Machine learning",
        "Deep Learning"
       
      ],
      imgSrc: "/assets/img/services/trail/Internet of things.png", // Image path for this workshop
    },
    {
      title: ["Software Programming"],
      items: [
        "Interview level C",
        "Modern C++ : C++17",
        "Embedded C",
        "Python Programming",
        "Interview level Java / Java for Certification",
        "Web Development",
      ],
      imgSrc: "/assets/img/services/trail/software programming.png", // Image path for this workshop
    },
    {
      title: ["Embedded Microcontroller"],
      items: [
        "High-performance application development with ARM",
        "Application development using Raspberry Pi or Arduino board",
        "Linux Kernel programming- Device driver",
        "Automotive with CAN Analysis & AUTOSAR",
        "Embedded Linux Porting with Beagle Board/ Beagle Bone Black",
      ],
      imgSrc: "/assets/img/services/trail/embedded microcontroller.png", // Image path for this workshop
    },
    {
      title: ["Modelling & Simulation, Digital Signal Processing"],
      items: [
        "Matlab & Simulink-Fundamentals",
        "Image Processing using Matlab & Simulink",
        "Video/Audio Processing using MATLAB",
        "Model-Based Design using Simulink and Stateflow",
        "DSP System design using TI TMS320 C6000",
        "Real-time application using MATLAB with Raspberry Pi/Arduino",
        "Digital signal controller Simscape Design for Analog Circuit",
        "Graphical User Interface in MATLAB",
      ],
      imgSrc: "/assets/img/services/trail/digital signal processing1.png", // Image path for this workshop
    },
    {
      title: ["Advanced Digital System Design (VLSI)"],
      items: [
        "FPGA Design With Verilog",
        "DSP design with Xilinx System Generator(Vivado, Cadence)",
        "IP Designing",
        "HDL Design for Performance(Speed,Area,Power)",
        "Data Encryption Algorithm Design",
        "Noise removal in speech signals",
        "Digital Signal Processing with FPGA",
        "Wireless Physical layer design",
        "OFDM Design",
        "Verification using System Verilog",
        "HDL Synthesis and System Architecture",
      ],
      imgSrc: "/assets/img/services/trail/advanced digital system design.png", // Image path for this workshop
    }
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleImageClick = (index) => {
      setClickedIndex(index);
  };


  
  const FacultyPrograms = [
    {
      title: ["Embedded"],
      items: [
        "Embedded C programming using C / C++",
        "Embedded Programming using ARM Cortex M3 Using STM Microcontroller",
        "Linux system Programming",
        "Linux Device Drivers",
        "ARM Architecture & Protocols",
        "RTOS",
        "MATLAB & Simulink",
      ],
      imgSrc: "/assets/img/services/trail/embedded1.png", // Image path for this workshop
    },
    {
      title: ["Internet of Things"],
      items: [
        "Introduction to IoT",
        "IoT with Raspberry Pi",
        "IoT Protocols – MQTT, AMQP, CoAP",
        "IoT Architecture",
        "IoT Edge node & Gateway Computing"
      ],
      imgSrc: "/assets/img/services/trail/Internet of things.png", // Image path for this workshop
    },
    {
      title: ["VLSI"],
      items: [
        "Designing Using Verilog",
        "Designing Using VHDL",
        "FPGA Designing",
        
      ],
      imgSrc: "/assets/img/services/trail/VLSI1.png", // Image path for this workshop
    },
    {
      title: ["Software Programming"],
      items: [
        "Advanced C / C++ Programming",
        "Core Java",
        "Angular",
        "React JS",
        "Python Programming",
        "Advance Python",
        "Mongo DB" ],
      imgSrc: "/assets/img/services/trail/software programming2.png", // Image path for this workshop
    },
    {
      title: ["Data Science"],
      items: [
        "Math & Statistics for data science",
        "Natural language processing",
        "Data Analysis & Visualization",
        "Machine Learning & Deep Learning",
        "Artificial Intelligence",
        "Advance MS Excel",
        "Power BI",
        "Tableau"
      ],
      imgSrc: "/assets/img/services/trail/data science2.png", // Image path for this workshop
    },
    {
      title: ["Full Stack Java Development"],
      items: [
        "RDBMS(My SQL)",
        "Java SE9",
        "Advance Java",
        "JDBC",
        "Web technology (HTML5, CSS, JavaScript, and Bootstrap)",
        "Angular java script",
        "J2EE, Java Frameworks"
      ],
      imgSrc: "/assets/img/services/trail/java.png", // Image path for this workshop
    },
  ];


  return (
    <>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  <Link href="/solutions/Edu-Tech/High-Tech-Laboratory">
                    <img src="/assets/img/solutions/ed.gif" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* corporate training */}

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp">
          <div className="row">
            <h2 className="tp-section__title mb-30">Corporate Training</h2>
            <p className=" mb-30">
            Our Technical Workshop for Students offers hands-on training in various advanced technology domains such as embedded systems, IoT, AI, and data science. These workshops aim to enhance students' practical knowledge by providing exposure to real-world applications and tools. Through interactive sessions and expert guidance, students gain valuable insights into industry practices and trends, preparing them for future career opportunities in technology.</p>
          </div>

   {/* course offered */}

<div className="row padding-section">
      <h3 className="mb-30">
        Courses Offered
        <i className="fa-solid fa-graduation-cap ps-3" style={{ color: "#0849BE" }}></i>
      </h3>

      <div className="courses-container">
        {contents.map((content, index) =>
          content.list && content.list.map((item, i) => (
            <div key={i} className="course-item" >
              <div className="slider-content">
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="slider-img"
                />
                <h6 className="slider-title">
                  {item?.title.split(" ").length > 5 ? (
                    <>
                      {item?.title.split(" ").slice(0, 5).join(" ")}
                      <br />
                      {item?.title.split(" ").slice(5).join(" ")}
                    </>
                  ) : (
                    item?.title
                  )}
                </h6>
              </div>
            </div>
          ))
        )}
      </div>
    </div>


{/* Institutional training */}
<div className="row padding-section">
            <h3 className="mb-30">
              Institutional Training
            </h3>
          

{/* Internship/Project Internship Program Section */}
  <div className="row padding-section">
            <h4 className="mb-30">Internship/Project Internship Program</h4>
            <p style={{marginBottom:"30px"}}>
            Our Internship Programs are designed for students who wish to gain hands-on experience in cutting- edge technology fields. These program provides students with industry exposure, live project work, and guidance from expert professionals. They aim to bridge the gap between academic knowledge
            and real-world industry demands, helping students enhance their practical skills and readiness for the job market.
            </p>
            {/* Swiper for Internship Programs */}
            <div className="col-lg-12 mb-4">
              <Swiper
                {...setting}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                slidesPerView={2} // Set to 2 images per page
                spaceBetween={30} // Space between slides
                loop={true} // Optional: allows the slider to loop
              >
                {contents1.map((section) => (
                  section.list && section.list.map((item, i) => (
                    <SwiperSlide key={i} className="tp-bs-brand-item wow">
                      <div className="slider-content">
                        <Image src={item?.img} alt={item?.title} width={800} height={400} className="slider-img" />
                        <h6 className="slider-title" style={{
                          position: 'absolute',
                          bottom: '50px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          color: 'white',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          padding: '5px',
                          whiteSpace: 'normal', // Allow text to wrap
                          textAlign: 'center', // Center align text
                          width: '90%', // Limit the width to help with wrapping
                        }}>
                          {item?.title.split(" ").length > 5 ? (
                            <>
                              {item?.title.split(" ").slice(0, 5).join(" ")}<br />
                              {item?.title.split(" ").slice(5).join(" ")}
                            </>
                          ) : (
                            item?.title
                          )}
                        </h6>
                      </div>
                    </SwiperSlide>
                  ))
                ))}
              </Swiper>
            </div>
          </div>

      
 {/* Technical Workshops Section */}

<div className="workshop-container">
              <h4 className="workshop-title">Technical Workshops</h4>
              <p className="workshop-description">
                Our Technical Workshop for Students offers hands-on training in
                various advanced technology domains such as embedded systems,
                IoT, AI, and data science. These workshops aim to enhance
                students' practical knowledge by providing exposure to
                real-world applications and tools. Through interactive sessions
                and expert guidance, students gain valuable insights into
                industry practices and trends, preparing them for future career
                opportunities in technology.
              </p>

              {/* desktop slider */}
              <div className="swiper-container d-block d-lg-none">
                <Swiper
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
                >
                  {workshopContents.map((workshop, index) => (
                    <SwiperSlide key={index} className="workshop-slide">
                      <div
                        className="workshop-card"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleImageClick(index)}
                      >
                        <Image
                          src={workshop.imgSrc}
                          alt={workshop.title.join(", ")}
                          width={800}
                          height={400}
                          className="workshop-image"
                        />
                        <div
                          className={`workshop-overlay ${
                            hoveredIndex === index ? "visible" : ""
                          }`}
                        >
                          <h6
                            className={`workshop-hover-title ${
                              clickedIndex === index ? "clicked" : ""
                            }`}
                          >
                            {workshop.title.map((titlePart, titleIndex) => (
                              <span key={titleIndex}>
                                {titlePart}
                                <br />
                              </span>
                            ))}
                          </h6>
                          <ul className="workshop-items">
                            {workshop.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="workshop-item">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

               {/* mobile slider */}
               <div className="swiper-container d-none d-lg-block">
                <Swiper
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  slidesPerView={2}
                  spaceBetween={30}
                >
                  {workshopContents.map((workshop, index) => (
                    <SwiperSlide key={index} className="workshop-slide">
                      <div
                        className="workshop-card"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleImageClick(index)}
                      >
                        <Image
                          src={workshop.imgSrc}
                          alt={workshop.title.join(", ")}
                          width={800}
                          height={400}
                          className="workshop-image"
                        />
                        <div
                          className={`workshop-overlay ${
                            hoveredIndex === index ? "visible" : ""
                          }`}
                        >
                          <h6
                            className={`workshop-hover-title ${
                              clickedIndex === index ? "clicked" : ""
                            }`}
                          >
                            {workshop.title.map((titlePart, titleIndex) => (
                              <span key={titleIndex}>
                                {titlePart}
                                <br />
                              </span>
                            ))}
                          </h6>
                          <ul className="workshop-items">
                            {workshop.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="workshop-item">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>


</div>    

      


{/* //Faculty Development Programs (FDP)*/}

<div className="workshop-container">
            <h3 className="workshop-title">Faculty Development Programs (FDP)<i className="fa-solid fa-code ps-3" style={{ color: "#0849BE" }}></i></h3>
            <p className="workshop-description">
            Our Faculty Development Program (FDP) aims to enhance the teaching skills and technical knowledgeof educators. It equips faculty members with industry-relevant tools, teaching methodologies, and
practical insights to help them stay updated with the latest trends and technologies. The programpromotes a hands-on learning approach to improve the quality of technical education delivered in institutions.
            </p>
{/* //destop slider */}
            <div className="swiper-container d-block d-lg-none">
                <Swiper
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                >
                    {FacultyPrograms.map((workshop, index) => (
                        <SwiperSlide key={index} className="workshop-slide">
                            <div
                                className="workshop-card"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => handleImageClick(index)}
                            >
                                <Image
                                    src={workshop.imgSrc}
                                    alt={workshop.title.join(', ')}
                                    width={800}
                                    height={400}
                                    className="workshop-image"
                                />
                                <div className={`workshop-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
                                    <h6 className={`workshop-hover-title ${clickedIndex === index ? 'clicked' : ''}`}>
                                        {workshop.title.map((titlePart, titleIndex) => (
                                            <span key={titleIndex}>{titlePart}<br /></span>
                                        ))}
                                    </h6>
                                    <ul className="workshop-items">
                                        {workshop.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="workshop-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
{/* //mobile slider */}
            <div className="swiper-container d-none d-lg-block">
                <Swiper
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={30}
                >
                    {FacultyPrograms.map((workshop, index) => (
                        <SwiperSlide key={index} className="workshop-slide">
                            <div
                                className="workshop-card"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => handleImageClick(index)}
                            >
                                <Image
                                    src={workshop.imgSrc}
                                    alt={workshop.title.join(', ')}
                                    width={800}
                                    height={400}
                                    className="workshop-image"
                                />
                                <div className={`workshop-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
                                    <h6 className={`workshop-hover-title ${clickedIndex === index ? 'clicked' : ''}`}>
                                        {workshop.title.map((titlePart, titleIndex) => (
                                            <span key={titleIndex}>{titlePart}<br /></span>
                                        ))}
                                    </h6>
                                    <ul className="workshop-items">
                                        {workshop.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="workshop-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
{/* Program Takeaways */}


<div className="row padding-section">
  <h3 className="mb-30">Program Takeaways <i className="fa-solid fa-file-code ps-3" style={{ color: "#0849BE" }}></i></h3>
  <div className="col-lg-12">
    <div className="row">
      {takeaways.map((item, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className="card m-1 hover-effect" style={{ height: "140px", minHeight: "100px", transition: "transform 0.3s, box-shadow 0.3s" ,border:"2px solid #044CBC"}}>
            <div className="p-3">
              <h5 className="card-title text-black">{item.title}</h5>
              <p className="card-title">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>

        {/* <!-- cta area --> */}
        <CtaArea />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea
