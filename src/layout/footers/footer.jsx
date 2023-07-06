import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';



const foter_two_content = {
    logo: "/assets/img/logo/dark-logo.png",
    description: <>Your goals are individual. We believe
    business advice should be too, so we have
    to help your business thrive in this work
    environment situation.</>
}

const {logo, description} = foter_two_content
const Footer = ({style_8, style_10}) => {
    return (
        <>
            <footer>   
   <div className={`bs-footer it-footer  ${style_8 ? "ca-footer" : ""} ${style_10 && "seo-footer"} dark-bg`} >
      <div className="container">
         <div className="bs-footer__main pb-10 pt-80 tp-border-bottom">
            <div className="row justify-content-center">
               <div className="col-xl-4 col-md-6">
                  <div className="tp-footer__widget mb-40">
                     <div className="bs-footer__top-logo mb-35">
                        <Link href="/"> 
                        {
                           <img width={250} src={logo} alt="" />

                        }
                        
                        </Link>
                     </div>
                     <p className="pr-40 text-white">
                        {description}
                     </p>
                  </div>
                  <div className="da-footer__top-social mb-30 text-white">
                    <SocialLinks /> 
                  </div>
               </div>
                {/* Coommon Footer start */}
                <CommonFooter />
                  {/* Coommon Footer end */}
              
            </div>
         </div>
        {/* footer copy right start */}
         <FooterCopyRight/>
        {/* footer copy right end */}
        
      </div>
   </div>
</footer>
        </>
    );
};

export default Footer;