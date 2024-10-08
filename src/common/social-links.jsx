import React from "react";
// social_links
const social_links = [
  {
    link: "https://www.linkedin.com/company/loop-tech-corporation/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "Linkedin"
  },
  {
    link: "https://twitter.com/MacroLoopTechnologies",
    target: "_blank",
    icon: "fa-brands fa-x-twitter",
    name: "Twitter",
  },
  {
    link: "https://instagram.com/looptech.in?igshid=NTc4MTIwNjQ2YQ==",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  }
];

const SocialLinks = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      {social_links.map((item, i) => (
        <a key={i} target="_blank" href={item.link}>
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;


const social_links_home_two = [
  {
    link: "https://www.linkedin.com/company/loop-tech-corporation/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "Linkedin"
  },
  {
    link: "https://twitter.com/MacroLoopTechnologies",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://instagram.com/looptech.in?igshid=NTc4MTIwNjQ2YQ==",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  }
];

export const SocialLinksHomeTwo = () => {
  return (
    <>
      {social_links_home_two.map((item, i) => (
        <a key={i} target="_blank" href={item.link}>
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

 