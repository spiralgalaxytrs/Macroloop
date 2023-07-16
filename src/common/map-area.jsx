import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9858551079624!2d80.25091619999999!3d12.9727564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6bda72ddf1%3A0x7b776b4ac90d976b!2s4%2F605%2C%20VOC%20St%2C%20Elango%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1689054091028!5m2!1sen!2sin"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-img">
          <img width={100} src="/favicon.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
