import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent"

const Construction_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Construction Technology" title="Construction Technology" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Construction_index;