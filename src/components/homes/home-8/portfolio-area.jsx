import React from "react";
import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/400-italic.css"; // Specify weight and style

const portfolio_content = {
  img_1: "/assets/img/brand/1.png",
  img_2: "/assets/img/brand/rn.png",
  name2:"Revolutionizing Networking",
  name: "LooperHub",
};
const { img_1, img_2,name,name2 } = portfolio_content;

const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/brand/Startups.jpg",
   
    name: "Startups",
  },
  {
    id: 2,
    img: "/assets/img/brand/Loopers.jpg",
   
    name: "Loopers",
  },
  {
    id: 3,
    img: "/assets/img/brand/al.jpg",
   
    name: "Angel Investors",
  },
  {
    id: 4,
    img: "/assets/img/brand/vc.jpg",
   
    name: "Venture Capitalists",
  },
];




const PortfolioArea = () => {
  return (
    <>
      <div className="ca-portfolio-area pt-110 pb-60 dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp ">
              <div className="section-title-wraper">
                <div className="tp-section text-center ">
                  <h1>
                  <span className="tp-section__bigtitle wow "style={{color:"#044cbc",fontFamily:"Metropolis",letterSpacing:"0.7px" }} >Looper<span style={{color:"black"}}>Hub</span> </span>
                  
                  </h1>
                  

                </div>
              </div>
            </div>
          </div> 
          <div className="row pt-130">
            <div className="col-xl-6">
            <h2 className="tp-section__title mb-50 mt-20 text-black" style={{fontFamily:"Metropolis",letterSpacing:"0.7px" }}>
A Social Network Company to build the future for Dreamers and Doers.</h2>
              <div
                className="ca-portfolio-img w-img mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                
                <img src={img_1} alt="" />
                <div className="ca-project-item__info">
                  
                  <h3 className="ca-project-item__title" style={{fontFamily:"Metropolis",letterSpacing:"0.7px" }}>
                    <a style={{backgroundImage:"linear-gradient(#0800fd, #0121ff), linear-gradient(#0011f9, #0020ff)"}}>{name}</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div
                className="ca-portfolio-img mb-25 w-img wow tpfadeUp"
                data-wow-delay=".4s"
              >
                <img src={img_2} alt="" />
                <div className="ca-project-item__info">
                  
                  <h3 className="ca-project-item__title" style={{fontFamily:"Metropolis",letterSpacing:"0.7px" }}>
                    <a style={{backgroundImage:"linear-gradient(#0800fd, #0121ff), linear-gradient(#0011f9, #0020ff)"}}>{name2}</a>
                  </h3>
                </div>
              </div>

              <div className="row">
                {portfolio_data.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="ca-portfolio-img w-img mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      <img src={item.img} alt="" />
                      <div className="ca-project-item__info" style={{fontFamily:"Metropolis",letterSpacing:"0.7px" }}>
                       
                        <h3 className="ca-project-item__title" style={{fontFamily:"Metropolis",letterSpacing:"0.7px" }}>
                          <a style={{backgroundImage:"linear-gradient(#0800fd, #0121ff), linear-gradient(#0011f9, #0020ff)"}}>{item.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
