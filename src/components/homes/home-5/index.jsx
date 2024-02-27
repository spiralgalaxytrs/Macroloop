import FooterTwo from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";

import HeroSlider from "./hero-slider";
import Service from "./services";
import CtaArea from "./cta"
import HeroBanner from "./hero-banner";
import Brand from "./brand";
import AboutBrand from "../home-4/brand";





const HomeFive = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutArea />
      <Brand /> 
      <AboutBrand />
      <Service />
      <HeroBanner/>
     <CtaArea rButton="Contact Us" lbutton="Request Meeting" link="mailto:info@looptech.in?subject=Requesting a meeting to  discuss our requirement-Reg."/>
     
      {/* <Blog /> */}
      <FooterTwo />
    </>
  );
};

export default HomeFive;
