import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Robotic_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Robotic Automation" title="Robotic Automation" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Robotic_index;