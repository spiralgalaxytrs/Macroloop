import React, { useState, useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const gallery_one = [
  "/assets/img/gallery/mp-gl-1.jpg",
  "/assets/img/gallery/mp-gl-2.jpg",
  "/assets/img/gallery/mp-gl-3.jpg",
  "/assets/img/gallery/mp-gl-4.jpg",
  "/assets/img/gallery/mp-gl-5.jpg",
  "/assets/img/gallery/mp-gl-6.jpg",
];



const setting_1 = {
  spaceBetween: 30,
  speed: 6000,
  slidesPerView: "auto",
  allowTouchMove: false,
};



const GallerySlider = () => {
  
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-mp-sw-slider  dark-bg" >


        <div className="container-fluid gx-0">
        <div className="row" >
                    <div className="col-12">
                        <div className="section-title-wraper text-center" style={{paddingTop:"75px"}}>
                            <div className="tp-section">
                                <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">Studio News</span>
                                <h2
                                    className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".4s">
                                    our  <span> PARTNERS</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
          <Swiper
            {...setting_1}
            loop={isLoop}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            modules={[Autoplay]}
            className="swiper-container tp-gl-silder"
          >
            {gallery_one.map((item, i) => (
              <SwiperSlide key={i} className="tp-mp-slider-item">
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          </div>
          </div>
    </>
  );
};

export default GallerySlider;
