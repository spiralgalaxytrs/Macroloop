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
      title: "Faculty Development Programs",
      content: `Our Faculty Development Program (FDP) aims to enhance the teaching skills and technical knowledge of educators. It equips faculty members with industry-relevant tools, teaching methodologies, and practical insights to help them stay updated with the latest trends and technologies.`,
    },
    {
      subtitle: "Program Take Away",
      list: [
        "Certificate on Completion.",
        "Hands on Session",
        "Expert Coaching",
        "Instructor led Online/Offline Session",
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
              <h2>{section.title}</h2>
              <h4>{section.subtitle}</h4>
              <p className={` ${!section.content && section.subtitle? 'pt-10' : "pt-30"}`}>
                {section.content}
                {section.list && (
                  <ul className={` ${section.content && !section.subtitle? 'pt-20' : "pt-0"}`}>
                    {section.list.map((item, i) => (
                      <li key={i} className="pt-2">{item}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* <!-- cta area --> */}
        <CtaArea />
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default ContentArea;
