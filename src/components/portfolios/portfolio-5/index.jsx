import BreadcrumbArea from "../../../common/breadcrumb-area";
import Footer from "../../../layout/footers/footer";
import Header from "../../../layout/headers/header";
import React from "react";
import PortfolioItemsArea from "./portfolio-items-area";

const PortfolioFive = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio Masonry" title="Case Study" />
      <PortfolioItemsArea />
      <Footer  tp_border={true}/>
    </>
  );
};

export default PortfolioFive;
