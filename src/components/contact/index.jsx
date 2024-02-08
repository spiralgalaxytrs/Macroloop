import BreadcrumbArea from "@/src/common/breadcrumb-area";

import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";
import ItCtaArea from "../service-details/it-cta-area";


const Contact = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <ContactArea />
     
      <ItCtaArea/>
      <Footer />
    </>
  );
};

export default Contact;
