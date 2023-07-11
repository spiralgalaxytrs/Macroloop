import CallToActionForm from '@/src/forms/call-to-action-form';
import React from 'react';


const it_cta_content = {
    title: "Any requirement on your mind. Let us know.",
   
}
const {title, des}  = it_cta_content



const ItCtaArea = () => {
    return (
        <>
        <div className="it-cta-area law-cta-area about-me-cta-area pt-120 pb-85 dark-bg"
         >
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6" >
                  <div className="mb-30">
                     <div className="it-cta__title wow tpfadeUp">
                        <div className="section-title-wraper">
                           <div className="tp-section">
                              <div className="pb-40"><img src="/assets/img/icons/red-what-icon.png" alt="" /></div>
                              <h2 className="tp-section__title text-white text-capitalize mb-25">{title}</h2>
                             
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6" >
                  <div className="it-cta-form about-cta-form wow tpfadeUp">
                    <CallToActionForm />
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
            
        </>
    );
};

export default ItCtaArea;