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
        { title: "Cyber Security", img: "/assets/img/services/about-service.jpg" },
        { title: "Electric Vehicle (EV)", img: "/assets/img/services/about-service.jpg" },
        { title: "Internet of Things (IoT)", img: "/assets/img/services/about-service.jpg" },
        { title: "Big Data Analytics", img: "/assets/img/services/about-service.jpg" },
        { title: "Machine Learning", img: "/assets/img/services/about-service.jpg" },
        { title: "Artificial Intelligence", img: "/assets/img/services/about-service.jpg" },
        { title: "AUTOSAR", img: "/assets/img/services/about-service.jpg" },
        { title: "Agile/Scrum", img: "/assets/img/services/about-service.jpg" },
        { title: "Embedded AI", img: "/assets/img/services/about-service.jpg" },
        { title: "VLSI", img: "/assets/img/services/about-service.jpg" },
        { title: "Digital Signal Processing", img: "/assets/img/services/about-service.jpg" }
      ],
    },
    {
      id: "collapseTwo",
      title: "Software & Programming",
      list: [
        { title: "MS Office", img: "/assets/img/services/about-service.jpg" },
        { title: "MATLAB Autocode Generation", img: "/assets/img/services/about-service.jpg" },
        { title: "Microcontroller & Automotive", img: "/assets/img/services/about-service.jpg" },
        { title: "Linux & RTOS", img: "/assets/img/services/about-service.jpg" },
        { title: "Web Technologies", img: "/assets/img/services/about-service.jpg" },
        { title: "Open Source", img: "/assets/img/services/about-service.jpg" },
        { title: "Relational Database Management System (RDBMS)", img: "/assets/img/services/about-service.jpg" },
        { title: "Programming Languages", img: "/assets/img/services/about-service.jpg" }
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
    spaceBetween: 80,
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
                                <Image src={item?.img} alt={item?.title} width={300} height={100} className="slider-img" />
                                <h6 className="slider-title">{item?.title}</h6>
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
              <i className="fa-solid fa-laptop-code ps-3" style={{ color: "#0849BE" }}></i>
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

          <div className="row padding-section">
            <h3 className="mb-30">Faculty Development Programs (FDP)<i className="fa-solid fa-code ps-3" style={{ color: "#0849BE" }}></i></h3>
            <div className="col-lg-12">
              <p>
                Enhance teaching skills and technical knowledge for educators, equipping them with industry-relevant tools, teaching methodologies, and practical insights
              </p>
              <div className="row">
                {content3.map((content, index) => (
                  <div className="col-lg-6 mt-2" key={index}>
                    <div className="card m-1 hover-effect1" style={{ height: "100%" }} >
                      <div className="p-3" style={{ background: "none!important" }}>
                        <h5 className="card-title text-black">{content.title}</h5>
                        <div>
                          <ul className="d-flex flex-wrap gap-2 align-items-center">
                            {content.list.map((item, i) => (
                              <li key={i} className={i % 2 == 0 ? "theme-text" : ""} style={{ fontSize: "16px" }}>
                                <span style={{ fontSize: "20px" }}>|</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row padding-section">
            <h3 className="mb-30">Program Takeaways<i className="fa-solid fa-file-code ps-3" style={{ color: "#0849BE" }}></i></h3>
            <div className="col-lg-12">
              <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                  <b>Certification : </b> Completion Certificate for all programs
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                  <b>Learning Modes : </b>  Online/Offline instructor-led sessions
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                  <b>Hands-On Sessions : </b> Practical exposure through labs and interactive exercises
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex">
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                  <b>Expert Coaching : </b> Guidance from industry experts
                </div>
              </p>
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

export default ContentArea;
