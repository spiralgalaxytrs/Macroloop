import LineWrap from "@/src/common/line-wrap";
import FooterSeven from "@/src/layout/footers/footer-7";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import FaqArea from "./faq-area";
import HeroBanner from "./hero-banner";
import MpPortfolio from "./mp-portfolio";
import PortfolioArea from "../../../common/portfolio-area";
import ServiceArea from "./service-area";

const HomeNine = () => {
  return (
    <>
    <LineWrap />
      <Header />
      <HeroBanner /> 
      <ServiceArea />
      <AboutArea />
      <Brand />
      <PortfolioArea />
      <FaqArea />
      <MpPortfolio />
      <Blog />
      <FooterSeven />
    </>
  );
};

export default HomeNine;
