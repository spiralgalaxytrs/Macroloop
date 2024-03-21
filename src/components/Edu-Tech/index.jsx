import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const EduTech_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Edu - Tech" title="Edu - Tech" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default EduTech_index;