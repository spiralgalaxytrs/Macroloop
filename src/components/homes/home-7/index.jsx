import FooterSix from "@/src/layout/footers/footer-6";
import Header from "@/src/layout/headers/header-7";
import React from "react";
import Brand from "../brand";
import AboutArea from "./about-area";
import Blog from "./blog";
import ContactHomeSeven from "./contact-home";
import CtaArea from "./cta-area";
import HeroAbout from "./hero-area";
import ProjectArea from "./project-area";
import PromotionArea from "./promotion-area";
import ServiceArea from "./service-area";

const HomeSeven = () => {
  return (
    <>
      <Header />
      <HeroAbout />
      <AboutArea />
      <CtaArea />
      <ServiceArea />
      <PromotionArea />
      <ProjectArea />
      <ContactHomeSeven />
      <Brand style_7={true} />
      <Blog/>
      <FooterSix />
      
    </>
  );
};

export default HomeSeven;
