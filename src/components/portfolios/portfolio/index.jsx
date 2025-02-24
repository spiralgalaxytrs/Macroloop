import BreadcrumbArea from "../../../common/breadcrumb-area";
import Header from "../../../layout/headers/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import Footer from "../../../layout/footers/footer";


const Portfolio = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio" title="Case Study" />
      <PortfolioArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Portfolio;
