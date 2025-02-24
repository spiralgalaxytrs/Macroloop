import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import SerivceVideos from "./serivce-videos";
import ServiceArea from "./service-area";

const ServiceTwo = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Service V2"  title="Our Partners" />
      <ServiceArea />
      <SerivceVideos />
      <Footer />
    </>
  );
};

export default ServiceTwo;
