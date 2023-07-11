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

const SocialLinks = () => {
  return (
    <>
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

 