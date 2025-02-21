import BreadcrumbArea from "../../../common/breadcrumb-area";
import Footer from "../../../layout/footers/footer";
import Header from "../../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Training_Programs_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Training Programs" title="Training Programs" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Training_Programs_index;
