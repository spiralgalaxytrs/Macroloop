import BreadcrumbArea from "../../../common/breadcrumb-area";
import Footer from "../../../layout/footers/footer";
import Header from "../../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const IOT_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="IOT Solution" title="IOT Solution" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default IOT_index;