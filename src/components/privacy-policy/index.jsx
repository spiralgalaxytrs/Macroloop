import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import PrivacyPolicyArea from "./privacy-policy-area";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Privacy Policy" title="Privacy Policy" />
      <PrivacyPolicyArea />
      <Footer  tp_border={true}/>
    </>
  );
};

export default PrivacyPolicy;
