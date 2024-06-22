import SocialLinks from "@/src/common/social-links";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const slider_content = [
  {
    id: 1,
    bg_img: "/assets/img/slider/BlogBanner.jpg",
    url: "/LooperHub",
    title: <>A LoopTech Venture: <br/> LooperHub - A revolution in making.</>
  },
  {
    id: 2,
    bg_img: "/assets/img/solutions/construction.gif",
    url: "/solutions/Construction-Technical",
    title: <>IT Infrastructure Solutions : <br /> Empowering Your Future with Resilient IT Foundations</>
  },
  {
    id: 3,
    bg_img: "/assets/img/solutions/DigT.gif",
    url: "/solutions/Digital-Transformation",
    title: <>Security Systems and Solutions: <br /> Uncompromised Security, Unmatched Peace of Mind</>
  },
  {
    id: 4,
    bg_img: "/assets/img/solutions/ed.gif",
    url: "/solutions/Edu-Tech",
    title: <>IoT and Digital Transformation : <br /> Connecting the Future: Revolutionizing Your Digital World</>
  },
  {
    id: 5,
    bg_img: "/assets/img/solutions/system-solutions.gif",
    url: "/solutions/Security-Systems",
    title: <>Construction Technology Solutions : <br /> Building Tomorrow's Landmarks with Cutting-Edge Technology</>
  },
  {
    id: 6,
    bg_img: "/assets/img/solutions/IT-infrastructure.gif",
    url: "/solutions/Infrastructure",
    title: <>Edu Tech Solutions : <br /> Innovating Education for a Brighter, Smarter Future</>
  }
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
      <div className="tp-ptg-slider p-relative bg-black">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
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
              className="ptg-slider-item slider_height d-flex align-items-center p-relative"
              data-background="assets/img/slider/ptg-hero-1.jpg"
              style={{
                backgroundImage: `url(${item.bg_img})`,
                // height: "70vh"
              }}
            >
              <div className="container d-flex flex-column slider_content" >
                <div className="row pt-100">
                  <div className="col-lg-10 col-12 align-self-end">
                    <h4 className="text-white display-5 fw-bolder">{item?.title}</h4>
                  </div>
                  <div className="self-end pt-10 readMore d-flex flex-row-reverse">
                    <div className="ptg-about-btn-wrapper mb-30 wow tpfadeUp" data-wow-delay=".3s">
                      <Link href={item?.url} className="tp-black-btn">
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

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="ptg-sldider-dot"></div>
      </div>
    </>
  );
};

export default HeroSlider;
