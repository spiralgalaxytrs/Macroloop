import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const sampleImages = [
  "/assets/img/automated data science and analysis.png",
  "/assets/img/advanced document processing and analysis.png", 
  "/assets/img/AI powered real estate platform.png",
];

const PortfolioDetailsArea = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const paragraphs = [
    {
      title: "SIRUS :Automated Data Science and Analysis",
      content: " SIRUS  represents a groundbreaking advancement in AI-powered data science. As the world's first fully automated AI Data Scientist, SIRUS handles the complete data science lifecycle without data replication, offering a comprehensive solution for businesses seeking to harness the power of their data. This innovative platform processes information directly at the source, ensuring zero data movement and maintaining the highest standards of security and compliance. SIRUS's advanced forecasting capabilities, powered by automated machine learning pipelines, boast an impressive 99.9% accuracy rate, providing businesses with reliable predictions and insights. One of SIRUS's standout features is its ability to generate instant actionable insights through automated data visualization and pattern recognition. This capability transforms complex data into clear, understandable information that businesses can immediately act upon. The platform's advanced AI assistant, takes this a step further by offering intelligent guidance across various scenarios. For instance, if a company experiences a revenue dip, SIRUS can dive deep into the data, pinpointing exact issues such as drops in sales, poor inventory management, or missed customer opportunities. It then provides clear, actionable strategies to address these challenges, effectively turning potential setbacks into opportunities for growth. SIRUS's end-to-end automation and enterprise-grade security make it a powerful tool for businesses of all sizes looking to leverage AI for data-driven decision-making. By eliminating the need for data replication and offering comprehensive data science capabilities, SIRUS streamlines the process of extracting valuable insights from complex datasets. This not only saves time and resources but also enables businesses to respond more quickly to market changes and customer needs. With SIRUS, we are setting a new standard in AI-assisted data science, offering a solution that promises to transform how businesses understand and utilize their data in the rapidly evolving digital landscape of 2025.",
    // img: sampleImages[0],
    cards:[{

     content : "Automated AI Lifecycle",
     color:"#ADD8E6"
    },
    {
     content:"Accurate Forecasting",
     color:"#B0E57C"

    },
    {
      content:"Instant Insights",
      color:"#FFFFE0"
    },
    {
      content:"Smart Problem-Solving",
      color:"#FAF0E6"
    }
      ]
      
      },
      
      {
     title: "LUNA :Advanced Document Processing & Analysis",
     content: "  LUNA, AI-powered document processing platform, revolutionizes how businesses and researchers handle textual data. Designed for precision and scalability, LUNA processes 100+ documents daily—a 12% increase from the previous day—with 99% accuracy (improving by 0.2% weekly). Its intelligent document analysis extracts critical insights from contracts, reports, and academic papers, while multi-language support ensures global applicability. The platform automates complex workflows, delivering an 85% efficiency gain (rising by 5% monthly) by generating automated summaries, identifying patterns in unstructured data, and connecting disparate information. For academic research, LUNA accelerates discoveries by summarizing papers, recommending relevant publications, and highlighting research gaps. In industries like retail and construction, it optimizes inventory management and project documentation by analyzing supply chain logs and resource allocation plans. Enterprise-grade security safeguards sensitive data, making LUNA ideal for sectors requiring compliance, such as finance and healthcare. By reducing manual document handling by 80%, LUNA empowers teams to focus on strategic tasks, driving innovation and operational excellence. LUNA exemplifies their mission to transform complex challenges into actionable solutions, making AI-driven efficiency accessible to organizations worldwide.",
     //img: sampleImages[1],
     cards:[{

      content : "AI-Powered Document Processing",
      color:"#FAF0E6"
     },
     {
      content:"Accurate Insight Extraction",
      color:"#FFFFE0"
 
     },
     {
       content:"Automated Workflows Efficiency",
       color:"#B0E57C"
     },
     {
       content:"Enterprise-Grade Security",
       color:"#ADD8E6"
     }
       ]
    },
   
    {
      title: "EdgeEstate : AI Powered Real Estate Platform",
      content: " Our AI-Powered Real Estate Platform is a groundbreaking solution that redefines property management through advanced technologies like Artificial Intelligence and Predictive Analytics. Designed to empower real estate agencies, developers, and investors, the platform offers real-time automated property valuations, personalized recommendations tailored to user preferences, and predictive market trend analytics that enable smarter investments. It goes beyond traditional tools by providing hyperlocal insights, such as neighborhood data on crime rates, proximity to amenities, and future infrastructure projects, while breaking language barriers with vernacular support powered by Natural Language Processing, it also leverages smart contract generations. Additionally, immersive AR/VR virtual tours enhance property viewing experiences, and sustainability-focused features like green property ratings promote eco-friendly choices. This innovative platform not only streamlines operations but also enhances customer engagement, fosters transparency, and aligns with global sustainability goals. Transform your real estate journey today with our AI-powered solution that is built to deliver efficiency, scalability, and trust.",
      //img: sampleImages[2],
      cards:[{

        content : "Voice to text Conversion",
        color:"#ADD8E6"
       },
       {
        content:"Real-Time Valuations& Market Insights",
        color:"#B0E57C"
   
       },
       {
         content:"Smart Contract Generation",
         color:"#FFFFE0"
       },
       {
         content:"AR/VR Virtual Tours",
         color:"#FAF0E6"
       }
         ]
    },
  ];

  return (
    <div className="tp-pf-detials-main dark-bg pt-50">
      <div className="container wow tpfadeUp">
        {paragraphs.map((item, index) => (
          <div
            key={index}
            className="row align-items-center mb-5"
            style={{
              display: "flex",
              //flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
              textAlign:index % 2 === 0 ? "left" : "right",
            }}
          >
            {/* <div className="col-md-6" style={{ marginBottom: "20px" }}>
              <Image src={item.img} alt={item.title} width={500} height={300} style={{ borderRadius: "10px" }} />
            </div> */}
             
            <div className="col-md-12" style={{ marginBottom: "20px" }}>
              <h4>{item.title}</h4>
              <p style={{ fontFamily: "Sans-serif", letterSpacing: "0.7px", fontSize: "14px" ,color:"black"}}>
                 {expandedIndex === index ? item.content : `${item.content.slice(0, 750)}...`}
              </p>
              {/* <button
               
                style={{
                  backgroundColor: "#044cbc",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#773cce";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#044cbc";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {expandedIndex === index ? "Show Less" : "Read More >>"}
              </button> */}
              <div
               onClick={() => toggleExpand(index)}
                className="ptg-about-btn-wrapper wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div  className="tp-black-btn">
                {expandedIndex === index ? "Show Less" : "Read More"}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>{
              item.cards && 
              item.cards.map((card, i) =>{
                return(
              <div className="col-md-3">
                  <div style={{
                    backgroundColor: card.color,
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                    height: "100%",
                    marginBottom: "30px",
                  }}>
                    {/* <h5>{card.title}</h5> */}
                    <p>{card.content}</p>
                  </div>
                </div>

                )
                })
              }
          </div>
        ))}
      </div>

    </div>
  );
};

export  default PortfolioDetailsArea ;
