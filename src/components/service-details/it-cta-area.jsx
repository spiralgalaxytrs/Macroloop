import CallToActionForm from '@/src/forms/call-to-action-form';
import React from 'react';


const it_cta_content = {
   title: "Any requirement on your mind. Let us know.",

}
const { title, des } = it_cta_content



const ItCtaArea = ({ location }) => {
   return (
      <>
         <div className="it-cta-area law-cta-area about-me-cta-area py-5 dark-bg"
         >
            <div className="container">
               <div className="row align-items-center gap-5 gap-lg-0">
                  <div className="col-md-6" >
                     <h4 className='mb-3 text-gradient'>Our Locations</h4>
                     <div className="it-cta__title wow tpfadeUp">
                        <div className="section-title-wraper">
                           <div className="tp-section">
                              <div className="row gap-4">
                                 {location?.map((item, i) => (
                                    <div key={i} className="col-lg-12">
                                       <div className="contact-cta-item text-black">
                                          <h3>{item.titel}</h3>
                                          <p className='mb-0'>{item.email}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6" >
                     <h4 className='text-center mb-3 text-gradient'>Quick Enquiry</h4>
                     <div className="it-cta-form about-cta-form wow tpfadeUp rounded px-4 py-5" style={{ backgroundImage: "linear-gradient(#2d56b3, #79a3ff)" }}>
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