import SocialLinks from "@/src/common/social-links";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const slider_content = [
  {
    id: 1,
    bg_img: "/assets/img/slider/BlogBanner.jpg",
    title: "Industry Automation",
  },
  // {
  //   id: 2,
  //   bg_img: "/assets/img/solutions/4.jpg",
  //   title: "Smart campus solutions",
  // },
  // {
  //   id: 3,
  //   bg_img: "assets/img/solutions/5.jpg",
  //   title: "IoT & Digital Transformation",
  // },
  // {
  //   id: 4,
  //   bg_img: "assets/img/slider/ptg-hero-4.jpg",
  //   title: "Wifi solutions",
  // }, {
  //   id: 5,
  //   bg_img: "assets/img/slider/ptg-hero-5.jpg",
  //   title: "AI-enabled software consultancy",
  // },
];


const HeroSlider = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  const hero_content = {
    btn: "Read More",
    // email: "info@webmail.com",
    // phone: "222 090 000 01",
  };
  const { btn, email, phone } = hero_content;
  return (
    <>
      <div className="tp-ptg-slider p-relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-container ptg-slider-active"
          effect="fade"
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          pagination={{
            el: ".ptg-sldider-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
            },
          }}
        >
          {slider_content.map((item, i) => (
            <SwiperSlide
              key={i}
              className="ptg-slider-item d-flex align-items-center p-relative"
              data-background="assets/img/slider/ptg-hero-1.jpg"
              style={{
                backgroundImage: `url(${item.bg_img})`,
                height: "90vh"
              }}
            >
              <div className="container d-flex flex-column" style={{ height: "80vh"}}>
                <div className="row flex-grow-1">
                  <div className="col-lg-10 col-12 align-self-end">
                    <h1 className="text-white display-4 fw-bolder">A LoopTech Venture: <br />LooperHub - A revolution in making.</h1>
                  </div>
                  <div className="col-lg-2 col-12 align-self-end">
                    <div className="ptg-about-btn-wrapper mb-30 wow tpfadeUp" data-wow-delay=".3s">
                      <Link href="/contact" className="tp-black-btn br-btn-bg-dark">
                        {btn}
                        <span className="ml-10">
                          <i className="fal fa-long-arrow-right"></i>
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>



              {/* <div className="ptg-slider-social">
                <b>Connect Here:</b>
                <span>  <a href="#"> <i className="fab fa-facebook-f"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-twitter"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-behance"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-youtube"></i> </a> </span>
              </div> */}
              {/* <div className="ptg-contact-slider-info">
                <span>
                  <a href={`mailto:${email}`}></a>{email}</span>
                <span className="ptg-spt"> - </span>
                <span>
                  <a href={`te:${phone}`}></a>{phone}</span>
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="ptg-sldider-dot"></div>
      </div>
    </>
  );
};

export default HeroSlider;
