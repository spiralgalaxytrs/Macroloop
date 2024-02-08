import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div className="row" style={{backgroundColor: "black"}}>
          <div className="col-lg-4 col-12 justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.9876584846015!2d80.24896077512291!3d12.972641037342859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%2F608%2CV.O.C.%20Street%2CKottivakkam%2C%20Old%20Mahabalipuram%20Road%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600041!5e0!3m2!1sen!2sin!4v1707389555533!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-4 col-12 justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.494584688877!2d77.13944377509299!3d11.076468889091151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff7a08d662bb%3A0x81c68f2ddd8c1dfa!2sKPR%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707389847923!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-4 col-12 justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.574743658906!2d78.07389247507658!3d9.88599909021367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfe9e0d71771%3A0xb00d568a6b1efdd6!2sTechnology%20Business%20Incubator%20(TCE-TBI)!5e0!3m2!1sen!2sin!4v1707389993999!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9858551079624!2d80.25091619999999!3d12.9727564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6bda72ddf1%3A0x7b776b4ac90d976b!2s4%2F605%2C%20VOC%20St%2C%20Elango%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1689054091028!5m2!1sen!2sin"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <div className="contact-map-img">
          <img width={100} src="/favicon.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
