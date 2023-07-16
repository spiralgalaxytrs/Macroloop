import CallToActionForm from '@/src/forms/call-to-action-form';
import React from 'react';
import Tilt from "react-parallax-tilt";





const JobDetailsArea = ({data}) => {
    console.log(data);
    
    return (
        <>
            <div className="tp-job-details pt-120 dark-bg">
         <div className="container">
         <div className="row">
               <div className="col-12 wow tpfadeUp">
                  <div className="about-page-img-3 mb-60 w-img" data-tilt=""  data-tilt-perspective="2000">
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                     <img src={`/${data?.img}`} alt={data.title} />

                </Tilt>
                  </div>
               </div>
            </div>
            <div className="tp-job-details-box pt-80 pb-80">
               <div className="row justify-content-center">
                  <div className="col-lg-10">
                     <div className="tp-inner-pt-section wow tpfadeUp">
                        <h4 className="tp-inner-pt-section__title text-white mb-30">{data?.title}</h4>
                        <p className="mb-30">
                            {data?.d1}
                        </p><p className="mb-30">
                            {data?.d2}
                        </p><p className="mb-30">
                            {data?.d3}
                        </p><p className="mb-30">
                            {data?.d4}
                        </p><p className="mb-30">
                            {data?.d5}
                        </p>
                        <p className="mb-30">
                            {data?.d6}
                        </p>
                        

                      
                       
                        <h4 className="tp-inner-pt-section__title text-white mb-30">Contact Us</h4>

                        <div className="tp-inner-pg-form wow tpfadeUp" data-wow-delay=".4s">
                  <div className="it-cta-form about-cta-form wow tpfadeUp">
                           
                          
                    <CallToActionForm />
                    
                
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default JobDetailsArea;