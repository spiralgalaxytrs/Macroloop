import Link from 'next/link';
import React from 'react';



const about_details_content  = {
    title: <>Associate with us to adapt the Forthwith Technologies</>,


    info_2000: <>We recognize that businesses need
    to concentrate on their core
    competencies to thrive in today's
    dynamic market. Therefore, our
    solutions
    are
    designed
    to
    streamline operations, automate
    processes, and optimize resource
    allocation, allowing our customers
    to redirect their major focus and
    resources towards their core
    activities.</>,

    info_2010: <>Our comprehensive approach to Industry 4.0 encompasses not only
    technological integration but also strategic guidance and support. We work
    closely with our customers to understand their unique challenges and goals,
    providing tailored solutions that align with their specific needs. We assist them
    in charting their digital transformation journey, ensuring that they can navigate
    the complexities of this rapidly evolving landscape with confidence.</>,
    
  

}

const {
   title, 
   info_2000, 
   info_2010, 
  } = about_details_content


const AboutDeatialsArea = () => {
    return (
        <>
            <div className="tp-about-deatials-service dark-bg pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="tp-about-sv-content">
                     <h3 className="tp-section__title wow text-white tpfadeUp mb-50">{title}</h3>
                  </div>
                  <div className="tp-ab-sv-tabs mb-30">
                     <ul className="nav nav-pills mb-30" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                           <button tabIndex="-1" className="nav-link active" id="2000" data-bs-toggle="pill" data-bs-target="#pills-2000"
                              type="button" role="tab" aria-controls="pills-2000" aria-selected="true">Why Looptech?</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button tabIndex="-1" className="nav-link" id="2010" data-bs-toggle="pill" data-bs-target="#pills-2010"
                              type="button" role="tab" aria-controls="pills-2010" aria-selected="false">Let's Collaborate</button>
                        </li>
                        
                     </ul>
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-2000" role="tabpanel" aria-labelledby="2000">
                           <div className="tp-ab-sv-tabs-content">
                              <p className='text-white'>{info_2000}</p>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2010" role="tabpanel" aria-labelledby="2010">
                           <div className="tp-ab-sv-tabs-content">
                              <p className='text-white'>{info_2010}</p>
                           </div>
                        </div>
                       
                     </div>
                  </div>
                  <div className="tp-sv-tabs-btn-wrapper mb-30">
                     <Link href="/contact" className="tp-white-btn">
                        Contact Us
                        <span className="ml-10">
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                     </Link>
                  </div>
               </div>
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="about-sv-img">
                     <img src="/assets/img/services/about-service.jpg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default AboutDeatialsArea;