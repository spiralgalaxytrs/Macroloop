import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// brands_data
// const brands_data = [
//   {
//     id: 1,
//     img: "/assets/img/brand/ptg-brand-1.png",
//   },
//   {
//     id: 2,
//     img: "/assets/img/brand/ptg-brand-2.png",
//   },
//   {
//     id: 3,
//     img: "/assets/img/brand/ptg-brand-3.png",
//   },
//   {
//     id: 4,
//     img: "/assets/img/brand/ptg-brand-2.png",
//   },
//   {
//     id: 5,
//     img: "/assets/img/brand/ptg-brand-4.png",
//   },
//   {
//     id: 6,
//     img: "/assets/img/brand/ptg-brand-3.png",
//   },
//   {
//     id: 7,
//     img: "/assets/img/brand/ptg-brand-1.png",
//   },
//   {
//     id: 8,
//     img: "/assets/img/brand/ptg-brand-1.png",
//   },
//   {
//     id: 9,
//     img: "/assets/img/brand/ptg-brand-2.png",
//   },
//   {
//     id: 10,
//     img: "/assets/img/brand/ptg-brand-3.png",
//   },
//   {
//     id: 11,
//     img: "/assets/img/brand/ptg-brand-2.png",
//   },
//   {
//     id: 12,
//     img: "/assets/img/brand/ptg-brand-4.png",
//   },
//   {
//     id: 13,
//     img: "/assets/img/brand/ptg-brand-3.png",
//   },
//   {
//     id: 14,
//     img: "/assets/img/brand/ptg-brand-1.png",
//   },
// ];
const brands_data = [
  {
    id: 1,
    img: "/assets/img/brand/hp_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/CISCO_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/IBM_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/ingram_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/A-SITE.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/acer_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/lucas_new.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/sensegiz_new.png",
  }
];


// brand setting
const setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};


const Brand = ({ style_8 }) => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (


    <>

      <div className={`ptg-brand-area ${style_8 ? "theme-bg-8 pt-50 pb-50" : ""} `}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center">
                <div className="tp-section">

                  <h2
                    className="tp-section__title text-non-rgb tp-rgb-border text-dark text-uppercase  wow tpfadeUp" data-wow-delay=".4s">
                    our PARTNERS
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={`tp-ptg-brand-slider ${style_8 ? "" : " pt-60 pb-60 pl-40 pr-40"}`}>

            <div className="row align-items-center">

              <div className="col-lg-12">
                <div className="tp-bs-brand-slider d-flex align-items-center justify-content-center">
                  <Swiper
                    {...setting}
                    loop={isLoop}
                    modules={[Navigation]}
                    className="brand-slider-active swiper-container"
                  >
                    {brands_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className={`tp-bs-brand-item wow ${item?.tpfade}`}
                        data-wow-delay={item?.delay}
                      >
                        <img src={item.img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
