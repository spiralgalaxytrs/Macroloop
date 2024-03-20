import { delay } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// const brands_data = [
//   {
//     id: 1,
//     img: "/assets/img/brand/app-brand-1.jpg",
//   },
//   {
//     id: 2,
//     img: "/assets/img/brand/app-brand-5.jpg",
//   },
//   {
//     id: 3,
//     img: "/assets/img/brand/app-brand-3.jpg",
//   },
//   {
//     id: 4,
//     img: "/assets/img/brand/app-brand-4.jpg",
//   },
//   {
//     id: 5,
//     img: "/assets/img/brand/app-brand-5.jpg",
//   },
//   {
//     id: 6,
//     img: "/assets/img/brand/app-brand-3.jpg",
//   },
//   {
//     id: 7,
//     img: "/assets/img/brand/app-brand-4.jpg",
//   },
//   {
//     id: 8,
//     img: "/assets/img/brand/app-brand-3.jpg",
//   },{
//     id: 9,
//     img: "/assets/img/brand/app-brand-1.jpg",
//   },
//   {
//     id: 10,
//     img: "/assets/img/brand/app-brand-5.jpg",
//   },
// ];

const brands_data = [
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/bharat.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/BIAL(CLIENT).png",
  },
  {
    id: 1,
    img: "/assets/img/brand/govt.svg",
  },
  {
    id: 1,
    img: "/assets/img/brand/kpriet.jpg",
  },
  {
    id: 1,
    img: "/assets/img/brand/ieee.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/kovaividya.png",
  },
  {
    id: 1,
    img: "/assets/img/brand/nalanda.jpg",
  },
];

// brands setting
const setting = {
  slidesPerView: 5,
  spaceBetween: 100,
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


const Brand = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-app-brand pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-breand-title text-center mb-60">
                <h1>OUR ESTEEMED CLIENTS</h1>
              </div>
              <div className="tp-bs-brand-slider pt-20">
                <Swiper
                  autoplay={{
                  delay: 4000,
                  disableOnInteraction: false
                  }}
                  {...setting}
                  // loop={isLoop}
                  modules={[Autoplay, Navigation]}
                  className="it-brand-slider-active swiper-container d-flex align-items-center"
                >
                  {brands_data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="tp-it-brand-item">
                        <img src={item.img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
