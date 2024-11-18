import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import DataProtectionArea from "./data-protection-area";

const DataProtection = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Data Protection Policy"  title="Data Protection Policy"/>
      <DataProtectionArea />
      <Footer tp_border={true} />
    </>
  );
};

export default DataProtection;