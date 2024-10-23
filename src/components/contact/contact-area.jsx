import React from "react";
import ItCtaArea from "../service-details/it-cta-area";

const contact_data = [
  {
    id: 1,
    titel: "Head office - Chennai",
    location:"https://maps.app.goo.gl/gKvQZXCtoQsMZTJd7",
    email: <>4/608,V.O.C. Street, Kottivakkam, <br /> Old Mahabalipuram Road, <br /> Perungudi, Chennai,<br />Tamil Nadu 600041</>,
    maps: <><iframe className="rounded border" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.9876584846015!2d80.24896077512291!3d12.972641037342859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%2F608%2CV.O.C.%20Street%2CKottivakkam%2C%20Old%20Mahabalipuram%20Road%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600041!5e0!3m2!1sen!2sin!4v1707389555533!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "300px", border: "0" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>

  },
  {
    id: 2,
    titel: "Branch office - Coimbatore ",
    location:"https://maps.app.goo.gl/HHS3U1iPDRgtR7gM7",
    email: <>3rd floor Incubation cell,<br /> KPR institute of engineering and technology <br /> Avinashi - Coimbatore Road, Arasur,<br /> Tamil Nadu 641407</>,
    phone: "",
    maps: <><iframe className="rounded border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.494584688877!2d77.13944377509299!3d11.076468889091151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff7a08d662bb%3A0x81c68f2ddd8c1dfa!2sKPR%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707389847923!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "300px", border: "0" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  },
  {
    id: 3,
    titel: "Branch office - Madurai",
    location:"https://maps.app.goo.gl/LynvGFj8EeK1X3fc8",
    email: <>2nd Floor ,Technology Business Incubator (TCE-TBI) <br /> Thaigarajar College of Engineering, <br /> Madurai, <br /> Tamil Nadu 625015</>,
    phone: "",
    maps: <><iframe className="rounded border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.574743658906!2d78.07389247507658!3d9.88599909021367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfe9e0d71771%3A0xb00d568a6b1efdd6!2sTechnology%20Business%20Incubator%20(TCE-TBI)!5e0!3m2!1sen!2sin!4v1707389993999!5m2!1sen!2sin" style={{ margin: "1px", width: "100%", height: "300px", border: "0" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  },
];

// contact_info
const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Say Hello",
  title: <> <br />Empowering the Future:
    Upscale Living with LoopTech</>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-25 pb-90 wow tpfadeUp dark-bg">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-6">
              <div className="contact-img-1 pb-10 w-img">
                <img src={img} alt="" style={{ height: "400px" }}/>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <div className="tp-contact-page-info">
                <span className="say-hello">{hi_text} </span>
                <h2 className="tp-section__title pb-60 mb-60 tp-border-bottom text-black align-items-center" style={{ letterSpacing: "1px", wordSpacing: "10px", textTransform: "capitalize" }}>
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <ItCtaArea location={contact_data} />
          {/* <div className="container">
            <div className="row gap-4 gap-lg-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="rounded py-4 px-3" style={{ backgroundImage: "linear-gradient(to bottom right, #2d56b3, #79a3ff)" }}>
                    <div className="contact-cta-item mb-3 text-black">
                      <h5 className="text-white text-center">{item.titel}</h5>
                    </div>
                    <div className="justify-content-center rounded px-lg-2">
                      {item.maps}
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactArea;
