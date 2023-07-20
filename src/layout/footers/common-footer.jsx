import Link from "next/link";
import React from "react";

// footer_links data
const footer_links = [
  {
    id: 1,
    title: "Quick Links",
    col: "col-xl-2",
    id: "",
    links: [
      { title: "About", link: "/about" },
      { title: "Solutions", link: "/solutions" },
      { title: "LCG", link: "/lcg" },
      { title: "Contact", link: "/contact" },
     
    ],
  },
  {
    id: 2,
    title: "Our Policies",
    col: "col-xl-2",
    id: "",
    links: [
      { title: "Privacy Policy", link: "/solutions/Industry-Automation" },
      { title: "Terms and conditions", link: "/solutions/Smart-campus-Solutions" },
     
      
    ],
  },
  {
    id: 3,
    title: "Solutions",
    col: "col-xl-2",
    id: "",
    links: [
      { title: "Industry Automation", link: "/solutions/Industry-Automation" },
      { title: "Smart Campus Solutions", link: "/solutions/Smart-campus-Solutions" },
      { title: "Wifi Solutions", link: "/solutions/Wifi-solutions" },
      { title: "IoT and Digital Transformation", link: "/solutions/IoT-and-Digital-Transformation" },
      
    ],
  },
];

const CommonFooter = () => {
  return (
    <>
      {footer_links.map((item, i) => (
        <div key={i} className={`${item.col} col-md-6`}>
          <div className="tp-footer__widget  mb-40">
            <h3 className="tp-footer__widget-title mb-35">{item.title}</h3>
            <ul id={item.id}>
              {item.links?.map((link, id) => (
                <li key={id}>
                  <a href={link.link}>{link.title}</a>
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
  copy_right_info:  <>Designed by <a href="https://thereciprocalsolutions.com/"> The Reciprocal Solutions</a> & Copyright By <a > MacroLoop Technologies </a> - {new Date().getFullYear()} </>,
};

const { copy_right_info } = footer_content;

export const FooterCopyRight = ({style_3, style_7, style_9}) => {
  return (
    <>    
      <div className={`tp-footer__bottom pt-25 pb-25 ${style_3 ? "da-ft-copyright-bg" : ""} ${style_7 ? "law-footer__bottom red-bg"  :''} ${style_9 ? "ha-footer-copyright" : ""}`}>  
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <div className={`tp-copyrigh-text ${style_3 ? "" : "text-center text-md-start"}`}>
              <span>{copy_right_info}</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
