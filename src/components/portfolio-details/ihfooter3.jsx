import React from "react";
import Image from "next/image";

const sampleImages = [
  "/assets/img/automated data science and analysis.png",
  "/assets/img/advanced document processing and analysis.png", 
  "/assets/img/AI powered real estate platform.png",
];

const PortfolioDetailsMobile = () => {
  const paragraphs = [
    {
      title: "SIRUS : Automated Data Science and Analysis",
      content: "SIRUS represents a groundbreaking advancement in AI-powered data science...",
      img: sampleImages[0],
    },
    {
      title: "LUNA : Advanced Document Processing & Analysis",
      content: "LUNA, AI-powered document processing platform, revolutionizes how businesses...",
      img: sampleImages[1],
    },
    {
      title: "EdgeEstate : AI Powered Real Estate Platform",
      content: "Our AI-Powered Real Estate Platform is a groundbreaking solution...",
      img: sampleImages[2],
    },
  ];

  return (
    <div className="tp-pf-detials-main dark-bg pt-50">
      <div className="container wow tpfadeUp">
        {paragraphs.map((item, index) => (
          <div key={index} className="mb-4">
            <h4>{item.title}</h4>
            <Image src={item.img} alt={item.title} width={300} height={200} style={{ borderRadius: "10px", width: "100%", height: "auto" }} />
            <p style={{ fontFamily: "Sans-serif", letterSpacing: "0.7px", fontSize: "14px", color: "black" }}>
              {item.content}
            </p>
            <button
              style={{
                backgroundColor: "#044cbc",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
                display: "block",
                width: "100%",
                textAlign: "center",
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
              Read More 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetailsMobile; 