import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import TermsArea from "./terms-area";

const Terms = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Terms"  title="Terms & Conditions"/>
      <TermsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Terms;
