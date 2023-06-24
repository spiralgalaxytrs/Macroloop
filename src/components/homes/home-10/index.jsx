import FooterTwo from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";

import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import FaqArea from "./faq-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import Newsletter from "./newsletter";
import ServiceArea from "./service-area";

const HomeTen = () => {
  return (
    <>
      <Header />
      <HeroBanner /> 
      <ServiceArea />
      <AboutArea />
      <Brand />
      <FaqArea />
      <FeatureArea />
      <Newsletter />
      <Blog />
      <FooterTwo style_10={true} />

    </>
  );
};

export default HomeTen;
