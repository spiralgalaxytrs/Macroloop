import React from "react";
import CtaArea from "../../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";

const ContentArea = () => {
  const sections = [
    {
      title: "Corporate Training",
      content: `LoopTech's corporate training program is designed to equip professionals with advanced technical skills tailored to the evolving demands of the industry. It empowers employees with practical knowledge that enhances their productivity and enables organizations to stay competitive. The training modules are customizable, ensuring alignment with specific business needs, while expert trainers provide real-world insights, making learning relevant and impactful. With a focus on skill enhancement and professional growth, LoopTech’s corporate training program fosters innovation and operational efficiency within organizations.`,
    },
    {
      title: "Courses offered",
      list: [
        "Cyber Security",
        "Electric Vehicle(EV)",
        "Internet of Things (IoT)",
        "Big Data Analytics",
        "Machine Learning",
        "MS Office",
        "Artificial Intelligence",
        "AUTOSAR",
        "Agile/Scrum",
        "R Language",
        "MATLAB Autocode Generation",
        "Software & Testing",
        "Embedded AI",
        "Microcontroller & Automotive",
        "VLSI",
        "Digital Signal Processing",
        "Linux & RTOS",
        "Web Technologies",
        "Open Source",
        "Relational Database Management System (RDBMS)",
        "Programming Languages",
      ],
    },
    {
      title: "Institutional Training",
      content: `Our Internship Programs are designed for students who wish to gain hands-on experience in cutting edge technology fields. These programs provide students with industry exposure, live project work, and guidance from expert professionals.`,
      list: [
        "Internship in Embedded Systems",
        "Internship in Internet Of Things",
        "Internship in VLSI Design",
        "Internship in Full Stack Java",
        "Internship in Data Science with AI ML",
        "Internship in Business Analytics",
        "Internship in Embedded AI",
        "Internship in Cyber Security",
      ],
    },
    {
      title: "Technical Workshops",
      content: `Our Technical Workshop for Students offers hands-on training in various advanced technology domains such as embedded systems, IoT, AI, and data science. These workshops aim to enhance students' practical knowledge by providing exposure to real-world applications and tools.`,
    },
    {
      title: "Internet of Things (IoT)",
      list: [
        "Data Analytics Using Python",
        "Machine Learning",
        "Deep Learning",
      ],
    },
    {
      title: "Software Programming",
      list: [
        "Interview level C",
        "Modern C++: C++17",
        "Embedded C",
        "Python Programming",
        "Interview level Java / Java for Certification",
        "Web Development",
      ],
    },
    {
      title: "Embedded Microcontroller",
      list: [
        "High-performance application development with ARM",
        "Application development using Raspberry Pi or Arduino board",
        "Linux Kernel programming- Device driver",
        "Automotive with CAN Analysis & AUTOSAR",
        "Embedded Linux Porting with Beagle Board/Beagle Bone Black",
      ],
    },
    {
      title: "Modelling & Simulation, Digital Signal Processing",
      list: [
        "Matlab & Simulink-Fundamentals",
        "Image Processing using Matlab & Simulink",
        "Video/Audio Processing using MATLAB",
        "Model-Based Design using Simulink and Stateflow",
        "DSP System design using TI TMS320 C6000",
        "Real-time application using MATLAB with Raspberry Pi/Arduino",
        "Digital signal controller Simscape Design for Analog Circuit",
        "Graphical User Interface in MATLAB",
      ],
    },
    {
      title: "Advanced Digital System Design (VLSI)",
      list: [
        "FPGA Design With Verilog",
        "DSP design with Xilinx System Generator (Vivado, Cadence)",
        "IP Designing",
        "HDL Design for Performance (Speed, Area, Power)",
        "Data Encryption Algorithm Design",
        "Noise removal in speech signals",
        "Digital Signal Processing with FPGA",
        "Wireless Physical layer design",
        "OFDM Design",
        "Verification using System Verilog",
        "HDL Synthesis and System Architecture",
      ],
    },
    {
      title: "Software Programming",
      list: [
        " Advanced C/C++",
        "Core Java",
        "Angular",
        "React JS",
        "Python",
        "MongoDB",
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

  ];

  const contents = [
    {
      id: "collapseOne",
      title: "Core Technical Courses",
      list: [
        "Cyber Security",
        "Electric Vehicle (EV)",
        "Internet of Things (IoT)",
        "Big Data Analytics",
        "Machine Learning",
        "Artificial Intelligence",
        "AUTOSAR",
        "Agile/Scrum",
        "Software & Testing",
        "Embedded AI",
        "VLSI",
        "Digital Signal Processing",
      ],
    },
    {
      id: "collapseTwo",
      title: "Software & Programming",
      list: [
        "MS Office",
        "MATLAB Autocode Generation",
        "Microcontroller & Automotive",
        "Linux & RTOS",
        "Web Technologies",
        "Open Source",
        "Relational Database Management System (RDBMS)",
        "Programming Languages",
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
            "IoT",
            "Data Analytics Using Python",
            "Machine Learning",
            "Deep Learning",
            "Software Programming",
            "Modern C++",
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
  return (
    <>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  <Link href="/contact">
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
                      {content.list && <div className="d-flex justify-content-center flex-wrap align-items-center">
                        {content.list.map((item, i) => (
                          <div key={i} className="bs-cta-btns no-hover">
                            <div className="tp-black-btn wow tpfadeLeft m-2 no-hover">{item}</div>
                          </div>
                        ))}
                      </div>}
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
                              <div className="tp-black-btn wow tpfadeLeft m-2 no-hover">{item}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="row">
                        {section.topics && section.topics.map((topic, topicIndex) => (
                          <div className="col-lg-6 col-12">
                            <div key={topicIndex}>
                              <h5 className="text-center bottom-bar">{topic.title}</h5>
                              <div className="d-flex justify-content-center flex-wrap align-items-center">
                                {topic.list.map((item, itemIndex) => (
                                  <div key={itemIndex} className="bs-cta-btns no-hover">
                                    <div className="tp-black-btn wow tpfadeLeft m-2 no-hover">{item}</div>
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
            <div className="col-lg-8">
              <p>
                Enhance teaching skills and technical knowledge for educators, equipping them with industry-relevant tools, teaching methodologies, and practical insights
              </p>
              {/* <div className="col-lg-6">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div> */}
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
