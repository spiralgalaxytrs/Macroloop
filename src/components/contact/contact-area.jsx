import React from "react";

const contact_data = [
  {
    id: 1,
    titel: "Head office",
    email: <>4/608,V.O.C. Street, Kottivakkam, <br /> Old Mahabalipuram Road, <br /> Perungudi, Chennai,<br />Tamil Nadu 600041</>,
    phone: "+91 8344445511",
  },
  {
    id: 2,
    titel: "Branch office - Coimbatore ",
    email: <>3rd floor Incubation cell,<br /> KPR institute of engineering and technology <br /> Avinashi - Coimbatore Road, Arasur,<br /> Tamil Nadu 641407</>,
    phone: "",
  },
  {
    id: 3,
    titel: "Branch office - Madurai",
    email: <>2nd Floor ,Technology Business Incubator (TCE-TBI) <br /> Thaigarajar College of Engineering, <br /> Thaigarajar Advance Research Centre,<br /> Next to Honeywell, Madurai, <br /> Tamil Nadu 625015</>,
    phone: "",
  },
];

// contact_info
const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Say Hello",
  title: <> <br />Empowering the Future: 
  Revolutionizing Living with LoopTech</>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-120 pb-90 wow tpfadeUp dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-img-1 pb-100 w-img">
                <img  src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <span className="say-hello">{hi_text} </span>
            </div>
            <div className="col-lg-12">
              <div className="tp-contact-page-info ">
                <h3 className="tp-section__title pb-60 mb-60 tp-border-bottom text-white">
                  {title}
                </h3>
              </div>
              <div className="row">
                {contact_data.map((item, i) => (
                  <div key={i} className="col-lg-4">
                    <div className="contact-cta-item mb-30 text-white">
                      <b>{item.titel}</b> <br />
                      <a>{item.email}</a> <br />
                      <br />
                      <a href={`tel:${item.tel}`}>{item.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
