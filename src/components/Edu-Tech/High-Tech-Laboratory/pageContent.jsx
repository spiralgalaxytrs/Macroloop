import React from "react"; 
import CtaArea from "../../homes/home-5/cta";
import Link from "next/link";

// Example data arrays for the sections
const services = [
  {
    title: "Consulting Services",
    list: [
      `Establishing a laboratory or optimizing an existing one is a multifaceted undertaking that requires precision, efficiency, and adherence to safety and regulatory standards. Whether you're a research institution, a corporate entity, an academic institution, or part of any industry, our Consulting Services are designed to guide you through every step of the process.`,
      "Our team of seasoned professionals specializes in crafting tailored solutions that elevate your laboratory to new levels of efficiency, compliance, and functionality.",
    ],
  },
  {
    title: "Lab Equipment Procurement",
    list: [
      "High-Quality Instruments: We supply a wide range of laboratory equipment, instruments, and consumables from reputable manufacturers to meet your specific research needs.",
      "Cutting-Edge Technology: Stay ahead with the latest advancements in scientific instrumentation and technology.",
    ],
  },
  {
    title: "Lab Installation and Calibration",
    list: [
      "Professional Installation: Our experienced technicians handle the precise installation and calibration of all equipment to ensure optimal performance.",
      "Validation Services: We offer validation and qualification services to guarantee compliance with industry standards and regulations.",
    ],
  },
  {
    title: "Training and Skill Development",
    list: [
      "Operator Training: We provide comprehensive training programs to ensure your staff is proficient in using laboratory equipment safely and effectively.",
      "Workshop and Seminars: Stay informed about the latest industry trends through our workshops and seminars conducted by experts.",
    ],
  },
  {
    title: "Lab Safety Solutions",
    list: [
      "Safety Equipment: We offer a range of safety equipment, including fume hoods, eyewash stations, and chemical storage solutions, to maintain a secure laboratory environment.",
      "Safety Consultation: Benefit from our safety experts' insights on best practices and compliance with safety regulations.",
    ],
  },
  {
    title: "Turnkey Lab Solutions",
    list: [
      "End-to-End Services: From concept to execution, we offer complete turnkey solutions, ensuring your lab is fully functional and ready for research.",
    ],
  },
  {
    title: "Lab Documentation and Compliance",
    list: [
      "Documentation Services: We assist in developing and maintaining lab SOPs, protocols, and compliance documentation.",
      "Regulatory Compliance: Stay up-to-date with regulatory changes and ensure your lab remains compliant.",
    ],
  },
  {
    title: "Lab Space Optimization",
    list: [
      "Space Analysis: Maximize your lab's space utilization and capacity, even in limited areas.",
      "Modular Lab Design: Explore modular lab solutions for scalability and flexibility.",
    ],
  },
  {
    title: "Lab Design and Planning",
    list: [
      "Customized Lab Layouts: We create tailored laboratory layouts that optimize space, workflow, and safety, ensuring efficiency and compliance with industry standards.",
      "Ergonomic Solutions: Our designs prioritize ergonomic considerations to enhance productivity and reduce the risk of workplace injuries.",
    ],
  },
  {
    title: "Global Procurement Services",
    list: [
      "Global Sourcing: Leverage our global network to procure specialized equipment and materials from around the world.",
      "Cost Optimization: We help you find cost-effective solutions without compromising on quality.",
    ],
  },
  {
    title: "Lab Maintenance and Support",
    list: [
      "Scheduled Maintenance: Keep your lab running smoothly with our routine maintenance services, preventing downtime and equipment failures.",
      "24/7 Support: Our dedicated support team is available round-the-clock to address your inquiries and technical issues promptly.",
    ],
  },
  {
    title: "Custom Laboratory Furniture",
    list: [
      "Bespoke Workstations: We design and manufacture custom laboratory furniture, including workbenches, cabinets, and storage solutions, to fit your lab's unique needs.",
      "Ergonomic Seating: Ensure the comfort and well-being of your researchers with ergonomic lab seating options.",
    ],
  },
  {
    title: "Environmental Control and Monitoring",
    list: [
      "Climate Control: Maintain precise temperature, humidity, and other environmental conditions critical to your research with our control systems.",
      "Data Monitoring: Implement advanced data monitoring solutions to track and analyze environmental parameters in real-time.",
    ],
  },
  {
    title: "Lab Automation Solutions",
    list: [
      "Workflow Automation: Streamline your laboratory processes with automation solutions that enhance efficiency and data accuracy.",
      "Robotics Integration: Explore the possibilities of lab robotics for high-throughput and repetitive tasks.",
    ],
  },
  {
    title: "Lab Renovation and Upgrades",
    list: [
      "Modernization: Upgrade your existing lab to incorporate the latest technology, enhance safety, and improve efficiency.",
      "Renovation Services: We offer comprehensive lab renovation services to revamp outdated facilities.",
    ],
  },
  {
    title: "Energy-Efficient Lab Solutions",
    list: [
      "Green Lab Initiatives: Implement energy-saving technologies and practices to reduce environmental impact and operating costs.",
      "Sustainable Lab Design: Design labs with sustainability in mind, incorporating renewable energy sources and efficient HVAC systems.",
    ],
  },
];

const labSetups = [
  "AI Lab", "Machine Learning Lab", "Robotics Lab", "Automation Lab", 
  "Data Centre Setup", "AR & VR Lab", "HPC Lab", "IoT / IIoT Lab",
  "3D Printing Lab", "Cyber Security Lab", "AV Studio Lab", 
  "Bio-Research Lab", "Drone Making Lab", "Embedded Lab",
  "Hardware Lab", "Blockchain Mining", "E-Vehicles Lab", 
  "VFX Lab", "Cloud/DevOps Lab", "E-Learning Lab",
  "Smart Classroom", "VR Classroom", "STEM Lab", "STEAM Lab"
];

const ContentArea = () => {
  return (
    <>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  <Link href="/contact">
                    <img src="/assets/img/solutions/ed.gif" alt="Lab Solutions" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp">

          <h2>Laboratory Solutions:</h2>
          <h4 className="pt-5">Our Services:</h4>
          <p className="pt-30">
            We offer comprehensive lab services, including consulting, lab equipment procurement, installation, and calibration. Our expertise spans various sectors, focusing on cutting-edge technology and environmental control for optimal lab performance.
          </p>

          {/* Map through the services */}
          {services.map((service, index) => (
            <>
              <h2>{service.title}</h2>
              <p className="pt-30">
              {service.list && (
                <ul>
                  {service.list.map((item, idx) => (
                    <li key={idx} className="pt-2">
                    {item.includes(":") ? <>
                      <b>{item.split(":")[0]}:</b> 
                      {item.split(":")[1]}
                    </>
                    : item
                    }
                    
                    </li>
                  ))}
                </ul>
              )}
              </p>
            </>
          ))}

          <h2>Lab setups offered:</h2>
          <p className="pt-30">
            <ul>
              {/* Map through lab setups */}
              {labSetups.map((setup, index) => (
                <li key={index}>{setup}</li>
              ))}
            </ul>
          </p>

        </div>

        {/* cta area */}
        <CtaArea/>
      </div>
    </>
  );
};

export default ContentArea;
