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
      <FloatingWhatsApp  phoneNumber="+919342508743"
        accountName="LoopTech"
        allowEsc
        allowClickAway
        notification
        notificationSound="true" 
        placeholder="Type..."
        statusMessage="Online"
        chatMessage="How can i help you, Sir?"/>
    </>
  );
};

export default Wrapper;
