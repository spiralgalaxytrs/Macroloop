import React from "react";
import Image from "next/image";
import CtaArea from "../../homes/home-5/cta";
import Link from "next/link";
import { Navigation , Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const ContentArea = () => {
 
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
        { title: "AUTOSAR", img: "/assets/img/services/trail/AUTOSAR.PNG" },
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
        "Hands-on experience for students in cutting-edge technology fields. Gain industry exposure, work on live projects, and receive guidance from experts",
      ],
    },
    {
      id: "collapseTwo",
      title: "Internship Tracks",
      list: [
        "Embedded Systems",
        "Internet of Things",
        "VLSI Design",
        "Full Stack Java",
        "Data Science with AI/ML",
        "Business Analytics",
        "Embedded AI",
        "Cyber Security"
      ]
    },
    {
      id: "collapseThree",
      title: "Technical Workshops",
      contentList: [
        "Practical training in advanced technology domains, enhancing real-world application skills. Interactive sessions prepare students for careers in technology",
      ],
    },
    {
      id: "collapseFour",
      title: "Workshop Topics",
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

  const content3 = [

    {
      title: "VLSI",
      list: [
        "Verilog",
        "VHDL",
        "FPGA Design"
      ],
    },
    {
      title: "IoT",
      list: [
        "IoT Basics",
        "Protocols",
        "Edge Node & Gateway Computing",
      ],
    },

    {
      title: "Software Programming",
      list: [
        "Advanced C/C++",
        "Core Java",
        "Angular",
        "React JS",
        "Python",
        "MongoDB"
      ]
    },
    {
      title: "Data Science",
      list: [
        "Math & Statistics for Data Science",
        "NLP",
        "Machine Learning",
        "Data Visualization",
      ]
    },
    {
      title: "Full Stack Java Development",
      list: [
        "RDBMS",
        "Java SE9",
        "Advanced Java",
        "JDBC",
        "Web Technologies",
      ],
    },
    {
      title: "Embedded Systems",
      list: [
        "Embedded C Programming",
        "ARM Cortex M3 Programming",
        "Linux System & Device Drivers",
        "RTOS",
      ],
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

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp">
          <div className="row">
            <h2 className="tp-section__title mb-30">Corporate Training</h2>
            <p className=" mb-30">
              LoopTech’s Corporate Training program is tailored to equip professionals with advanced technical skills, improving productivity and competitiveness.
              Training modules are customizable, aligning with business needs, with expert-led sessions focused on skill enhancement
            </p>
          </div>
          <div className="row padding-section">
            <h3 className="mb-30">Courses Offered<i className="fa-solid fa-graduation-cap ps-3" style={{ color: "#0849BE" }}></i></h3>
            {contents.map((content, index) => (
              <div className="accordion" id="accordionExample" key={index}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bolder"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${content.id}`}
                      aria-expanded="true"
                      aria-controls={content.id}
                    >
                      {content.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${content.id}`}
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {content.list &&
                        <Swiper {...setting}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                          }}
                          modules={[Autoplay, Navigation]}
                        >
                          {content.list.map((item, i) => (
                            <SwiperSlide
                              key={i}
                              className={`tp-bs-brand-item wow`}
                              data-wow-delay={item?.delay}
                            >
                              <div className="slider-content">
                                <Image src={item?.img} alt={item?.title} width={800} height={200} className="slider-img"  />
                                <h6 className="slider-title " >{item?.title}</h6>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>}
                      {contents1.content_list && <p>{content.content_list}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="row padding-section">
            <h3 className="mb-30">
              Institutional Training
            </h3>
            {contents1.map((section, sectionIndex) => (
              <div className="accordion" id="accordionExample" key={sectionIndex}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bolder"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${section.id}`}
                      aria-expanded="true"
                      aria-controls={section.id}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${section.id}`}
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {section.contentList && (
                        <div>
                          {section.contentList.map((item, itemIndex) => (
                            <p key={itemIndex} className="my-3">{item}</p>
                          ))}
                        </div>
                      )}

                      {section.list && (
                        <div className="d-flex justify-content-center flex-wrap align-items-center">
                          {section.list.map((item, itemIndex) => (
                            <div key={itemIndex} className="bs-cta-btns no-hover">
                              <div className="tp-black-btn wow tpfadeLeft m-2 ">{item}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="row">
                        {section.topics && section.topics.map((topic, topicIndex) => (
                          <div className=" col-12">
                            <div key={topicIndex}>
                              <h5 className="text-center bottom-bar mt-4">{topic.title}</h5>
                              <div className="d-flex justify-content-center flex-wrap align-items-center">
                                {topic.list.map((item, itemIndex) => (
                                  <div key={itemIndex} className="bs-cta-btns no-hover">
                                    <div className="tp-black-btn wow tpfadeLeft m-2 ">{item}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

      


{/* //Faculty Development Programs (FDP)*/}


     <div className="row padding-section">
      <h3 className="mb-30">Faculty Development Programs (FDP)
      <i className="fa-solid fa-code ps-3" style={{ color: "#0849BE" }}></i>
      </h3>
      <div className="col-lg-12">
        <p>
          Enhance teaching skills and technical knowledge for educators, equipping them with industry-relevant tools, teaching methodologies, and practical insights.
        </p>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true} // Optional: allows the slider to loop
          className="mySwiper"
        >
          {content3.map((content, index) => (
            <SwiperSlide key={index}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card m-1 hover-effect1" style={{ height: "auto", minHeight: "150px" }}>
                    <div className="p-2" style={{ background: "none!important" }}>
                      <h5 className="card-title text-black">{content.title}</h5>
                      <div>
                        <ul className="d-flex flex-wrap gap-2 align-items-center">
                          {content.list.map((item, i) => (
                            <li key={i} className={i % 2 === 0 ? "theme-text" : ""} style={{ fontSize: "16px" }}>
                              <span style={{ fontSize: "20px" }}>|</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {content3[index + 1] && (
                  <div className="col-lg-6">
                    <div className="card m-1 hover-effect1" style={{ height: "auto", minHeight: "150px" }}>
                      <div className="p-2" style={{ background: "none!important" }}>
                        <h5 className="card-title text-black">{content3[index + 1].title}</h5>
                        <div>
                          <ul className="d-flex flex-wrap gap-2 align-items-center">
                            {content3[index + 1].list.map((item, i) => (
                              <li key={i} className={i % 2 === 0 ? "theme-text" : ""} style={{ fontSize: "16px" }}>
                                <span style={{ fontSize: "20px" }}>|</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
              <div className="card m-1 hover-effect1" style={{ height: "auto", minHeight: "100px" }}>
                <div className="p-3">
                  <h5 className="card-title text-black">{item.title}</h5>
                  <p>{item.content}</p>
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
