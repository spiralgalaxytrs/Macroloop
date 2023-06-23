import FooterTwo from "@/src/layout/footers/footer-2";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import HeroSlider from "./hero-slider";
import Portfolio from "./portfolio";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";
import Service from "./services";
import BusinessJourney from "../../../common/business-journey";


const HomeFive = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutArea />
      <Service />
      <Brand /> 

      <Portfolio />
     <Testimonial />
      <Blog />
      <BusinessJourney/>
      <FooterTwo />
    </>
  );
};

export default HomeFive;
