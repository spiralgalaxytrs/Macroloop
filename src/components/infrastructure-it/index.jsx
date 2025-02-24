import BreadcrumbArea from "../../common/brands";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Infrastructure_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="IT Infrastructure" title="IT Infrastructure" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Infrastructure_index;