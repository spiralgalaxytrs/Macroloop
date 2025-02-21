import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Security_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Safety Management" title="Safety Management" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Security_index;
