import FooterTwo from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import About from "./about";
import Brand from "../brand";
import CallToAction from "./call-to-action";
import OurBlog from "./our-blog";
import Portfolio from "./portfolio";
import Service from "./service";
import Slider from "./slider";
import Testimonial from "./testimonial";

const HomeTwo = () => {
  return (
    <>
      <Header />
      <Slider />
      <Service />
      <About />
      <Brand style_2={true} />
      <Portfolio />
      <Testimonial />
      <CallToAction />
      <OurBlog />
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
