import React from "react";
import CtaArea from "../../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";

const ContentArea = () => {
  const sections = [
    {
      title1: "Corporate Training",
      content1: `LoopTech’s Corporate Training program is tailored to equip professionals with advanced technical skills, improving productivity and competitiveness. Training modules are customizable, aligning with business needs, with expert-led sessions focused on skill enhancement.`,
    },
    {
      title: "Courses Offered",
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
        "MS Office",
        "MATLAB Autocode Generation",
        "Microcontroller & Automotive",
        "Linux & RTOS",
        "Web Technologies",
        "Open Source",
        "Relational Database Management System (RDBMS)",
        "Programming Languages",
      ],
    },
    ,
    {
      title: "Institutional Training",
      content: `Our Internship Programs are designed for students who wish to gain hands-on experience in cutting edge technology fields. These programs provide students with industry exposure, live project work, and guidance from expert professionals.`,
      list: [
        "Embedded Systems",
        "Internet of Things",
        "VLSI Design",
        "Full Stack Java",
        "Data Science with AI/ML",
        "Business Analytics",
        "Embedded AI",
        "Cyber Security",
        "Internship in Cyber Security",
      ],
    },
    {
      title: "Technical Workshops",
      content: `Practical training in advanced technology domains, enhancing real-world application skills. Interactive sessions prepare students for careers in technology.`,
    },
    {
      title: "Workshop Topics",
      subtitle1: `Core Topics`,
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
      subtitle2: `Specialized Training`,
      list2: [
        "Linux Kernel Programming",
        "Automotive CAN Analysis & AUTOSAR",
        "Digital Signal Processing",
        "MATLAB & Simulink (Image, Video, Audio Processing)",
        "Model-Based Design using Simulink and Stateflow",
        "FPGA Design",
        "Wireless Physical Layer Design",
        "OFDM",
        "Digital Signal Processing with FPGA",
      ],
    },
    {
      title: "Faculty Development Programs",
      content: `Our Faculty Development Program (FDP) aims to enhance the teaching skills and technical knowledge of educators. It equips faculty members with industry-relevant tools, teaching methodologies, and practical insights to help them stay updated with the latest trends and technologies.`,
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
        "Verilog",
        "VHDL",
        "FPGA Design",
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
          {sections.map((section, index) => (
            <div key={index}>
              {section.content1 && <div class="container py-5">
                <h2>{section.title1}</h2>
                <div class="row py-5 text-center text-xl-start align-items-center">
                  <div class="col-xl-4 pt-5 pt-xl-0 order-lg-2">
                    <div class="appear-animation" data-appear-animation="fadeIn"
                      data-appear-animation-delay="800">

                      <div class="col-lg-12">
                        <img class="img-fluid rounded mb-4" src="/assets/img/about/about2.jpeg" alt="Project Image" />

                      </div>
                    </div>

                  </div>
                  <div class="col-xl-8 order-lg-1">
                    <div class="overflow-hidden">
                      <div class="appear-animation" data-appear-animation="maskUp"
                        data-appear-animation-delay="0">
                        <h3>{section.content1}</h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>}
              <h2>{section.title}</h2>
              <h4>{section.subtitle1}</h4>
              

              {<p className={` ${!section.content && section.subtitle1 ? 'pt-10' : "pt-30"}`}>
                {section.content}
                {section.list && (
                  <ul className={` ${section.content && !section.subtitle1 ? 'pt-20' : "pt-0"}`}>
                    {section.list.map((item, i) => (
                      <li key={i} className="pt-2">{item}</li>
                    ))}
                  </ul>
                )}
              </p>}
              <h4>{section.subtitle2}</h4>
              {<p className={` ${!section.content && section.subtitle2 ? 'pt-10' : "pt-30"}`}>

                {section.list2 && (
                  <ul className={` ${section.content && !section.subtitle2 ? 'pt-20' : "pt-0"}`}>
                    {section.list.map((item, i) => (
                      <li key={i} className="pt-2">{item}</li>
                    ))}
                  </ul>
                )}
              </p>}

            </div>


          ))}
          
        </div>

        {/* <!-- cta area --> */}
        < CtaArea />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;
