import BreadcrumbArea from "../../../common/breadcrumb-area";
import Footer from "../../../layout/footers/footer";
import Header from "../../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const High_Tech_Laboratory_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="High Tech Laboratory" title="High Tech Laboratory" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default High_Tech_Laboratory_index;
