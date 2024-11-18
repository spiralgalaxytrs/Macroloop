import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContentArea from "./pageContent";


const Metaverse_index = () => {
    return (
      <>
        <Header />
        <BreadcrumbArea acive_menu="Metaverse" title="Metaverse" />
        <ContentArea />
        <Footer tp_border={true} />
      </>
    );
  };

export default Metaverse_index;
