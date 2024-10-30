import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Infrastructure_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="IT Infrastructure Solutions" title="IT Infrastructure Solutions" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Infrastructure_index;