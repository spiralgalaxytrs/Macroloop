import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Digital_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Digital Transformation" title="Digital Transformation" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Digital_index;