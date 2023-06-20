import FooterFour from "@/src/layout/footers/footer-4";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import HeroSlider from "./hero-slider";
import Portfolio from "./portfolio";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";

const HomeFive = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutArea />
      <ServiceArea />
      <Portfolio />
     <Testimonial />
      <Brand /> 
      <Blog />
      <FooterFour />
    </>
  );
};

export default HomeFive;
