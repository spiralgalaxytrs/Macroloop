import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const Wrapper = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      
    </>
  );
};

export default Wrapper;
