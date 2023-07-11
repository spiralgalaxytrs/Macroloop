import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";

const PortfolioDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="LCG" title="Learn-Contribute-Grow" />
      <PortfolioDetailsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default PortfolioDetails;
