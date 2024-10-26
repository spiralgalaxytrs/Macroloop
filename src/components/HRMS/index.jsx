import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent"

const HRMS_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="HRMS Solutions" title="HRMS Solutions" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default HRMS_index;
