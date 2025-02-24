import BreadcrumbArea from "../../common/breadcrumb-area";

import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";
import ItCtaArea from "../service-details/it-cta-area";


const Contact = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <ContactArea />
      <Footer />
    </>
  );
};

export default Contact;
