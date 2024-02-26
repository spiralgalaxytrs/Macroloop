import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
// import PriceArea from "./price-area";
import ServiceArea from "./service-area";

const Service = ({data}) => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Services" title="What We Do" />
      <ServiceArea data={data} />
      {/* <PriceArea /> */}
      <Footer />
    </>
  );
};

export default Service;
