import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Security_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="SAFETY MANAGEMENT" title="Safety Management" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Security_index;
