import CallToActionForm from '@/src/forms/call-to-action-form';
import React from 'react';
import Tilt from "react-parallax-tilt";





const JobDetailsArea = ({data}) => {
    console.log(data?.list.id);
    
    return (
        <>
        <style jsx> {'.ul{ list-style-type: square;}'}
        
        </style>
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
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title}</h4>
                        <p className="mb-30">
                            {data?.d1}
                           
                        </p>
                       
                        
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title1}</h4>
                        <p className="mb-30">
                            {data?.d2}
                        </p>
                        <div className='ul'>
                        {data?.list.map((e)=>(
                         
                         <ul><li>
                           
                        {e.id}
                            </li></ul> 
                        
                        )
                        )}
                        </div>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title2}</h4>
                        <p className="mb-30">
                            {data?.d3}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title3}</h4>
                        <p className="mb-30">
                            {data?.d4}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title4}</h4>
                        <p className="mb-30">
                            {data?.d5}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title5}</h4>
                        <p className="mb-30">
                            {data?.d6}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title6}</h4>
                        <p className="mb-30">
                            {data?.d7}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title7}</h4>
                        <p className="mb-30">
                            {data?.d8}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title8}</h4>
                        <p className="mb-30">
                            {data?.d9}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title9}</h4>
                        <p className="mb-30">
                            {data?.d10}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title10}</h4>
                        <p className="mb-30">
                            {data?.d11}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title11}</h4>
                        <p className="mb-30">
                            {data?.d11}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title12}</h4>
                        <p className="mb-30">
                            {data?.d12}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title13}</h4>
                        <p className="mb-30">
                            {data?.d13}
                        </p>
                        <h4 className="tp-inner-pt-section__title text-black mb-30">{data?.title14}</h4>
                        

                      
                       
                        <h4 className="tp-inner-pt-section__title text-black mb-30">Contact Us</h4>

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