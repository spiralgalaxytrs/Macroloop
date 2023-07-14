import FooterTwo from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import HeroSlider from "./hero-slider";
import Service from "./services";
import CtaArea from "./cta"
import GallerySlider from "./gallery-slider"
import HeroBanner from "./hero-banner";



const HomeFive = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutArea />
      <Service />
      {/* <Brand />  */}
      <HeroBanner/>
     <CtaArea rButton="Contact Us" lbutton="Request Meeting"/>
     
      {/* <Blog /> */}
      <FooterTwo />
    </>
  );
};

export default HomeFive;
