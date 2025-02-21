import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent"

const HRMS_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="HRMS" title="HRMS" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default HRMS_index;
