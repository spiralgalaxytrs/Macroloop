import Link from 'next/link';
import React from 'react';

const BreadcrumbArea = ({acive_menu = "About us", title = "About Us"}) => {
    return (
        <>
             <div className="breadcrumb__area dark-bg pt-55 pb-55" 
             style={{backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg.png)`}}
             >
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <div className="breadcrumb__list mb-10">
                        <span><Link href="/">Home</Link></span>
                        <span className="dvdr dvdr-line"></span>
                        <span className="tp-bc-acive-menu">{acive_menu}</span>
                     </div>
                     <h3 className="breadcrumb__title text-black pt-30" style={{fontWeight:600}}>{title}</h3>
                  </div>
               </div> 
            </div>
         </div>
      </div>
        </>
    );
};

export default BreadcrumbArea;