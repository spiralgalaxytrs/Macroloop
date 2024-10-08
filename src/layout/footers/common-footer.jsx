import Link from "next/link";
import React from "react";

// footer_links data
const footer_links = [
  {
    id: 1,
    title: "Quick Links",
    col: "col-lg-2",
    links: [
      { title: "About", link: "/about" },
      { title: "Solutions", link: "/solutions" },
      { title: "LCG", link: "/lcg" },
      // { title: "LooperHub", link: "/LooperHub" },
      // { title: "Contact", link: "/contact" },
      // { title: "Privacy Policy", link: "/privacy-policy" }
     
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    col: "col-lg-2",
    links: [
      // { title: "About", link: "/about" },
      // { title: "Solutions", link: "/solutions" },
      // { title: "LCG", link: "/lcg" },
      { title: "LooperHub", link: "/LooperHub" },
      { title: "Contact", link: "/contact" },
      { title: "Privacy Policy", link: "/privacy-policy" }
     
    ],
  }
  // {
  //   id: 2,
  //   title: "Our Policies",
  //   col: "col-lg-2",
  //   links: [
  //     { title: "Privacy Policy", link: "/privacy-policy" },
  //     { title: "Terms and conditions", link: "/terms" },
  //     { title: "Data Protection Policy", link : "/dataProtection"},
     
      
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Solutions",
  //   col: "col-lg-3",
  //   id: "",
  //   links: [
  //     { title: "Construction Technical", link: "/solutions/Construction-Technical" },
  //     { title: "Digital Transformation Solutions", link: "/solutions/Digital-Transformation" },
  //     { title: "Edu Tech Solutions", link: "/solutions/Edu-Tech" },
  //     { title: "Security Systems", link: "/solutions/Security-Systems" },
  //     { title: "IT Infrastructure Solutions", link: "/solutions/Infrastructure" },
      
  //   ],
  // },
];

const CommonFooter = () => {
  return (
    <>
      {footer_links.map((item, i) => (
        <div key={i} className={`${item.col} col-md-6`}>
          <div className="tp-footer__widget  mb-40">
            <h3 className="tp-footer__widget-title  mb-35" style={{color:"#044CBC"}}>{item.title}</h3>
            <ul id={item.id}>
              {item.links?.map((link, id) => (
                <li key={id}>
                  <a style={{color:"#000000"}} href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommonFooter;







// copy right text
const footer_content = {
  copy_right_info:  <> ©  {new Date().getFullYear()} <a className="text-black">MacroLoop Technologies </a>  | Design by <a href="https://thereciprocalsolutions.com/" className="text-black"> The Reciprocal Solutions</a></>,
};

const { copy_right_info } = footer_content;

export const FooterCopyRight = ({style_3, style_7, style_9}) => {
  return (
    <>    
      <div className={`tp-footer__bottom pt-15 pb-15 ${style_3 ? "da-ft-copyright-bg" : ""} ${style_7 ? "law-footer__bottom red-bg"  :''} ${style_9 ? "ha-footer-copyright" : ""}`}>  
        {/* <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <div className={`tp-copyrigh-text text-black ${style_3 ? "" : "text-center text-md-start"}`}>
              <span>{copy_right_info}</span>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="text-center">
          <h6 className="text-secondary">{copy_right_info}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
