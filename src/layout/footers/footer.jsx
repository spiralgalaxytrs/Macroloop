import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


const foter_two_content = {
    logo: "/assets/img/logo/logo.jpg",
    dec:"MACROLOOP TECHNOLOGIES PRIVATE LIMITED",
    description: <>Our comprehensive approach to Industry 4.0 encompasses not only
    technological integration but also strategic guidance and support.</>
}

const {logo,dec,description} = foter_two_content
const Footer = ({style_8, style_10}) => {
    return (
        <> <hr />
            <footer>   
   <div className={`bs-footer it-footer  dark-header ${style_8 ? "ca-footer" : ""} ${style_10 && "seo-footer"} dark-bg`} >
      <div className="container">
         <div className="bs-footer__main pt-10 tp-border-bottom">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-6">
                  <div className="tp-footer__widget mb-40">
                     <div className="bs-footer__top-logo mb-20">
                        <Link href="/"> 
                        {
                           <img width={250} src={logo} alt="" />

                        }
                        
                        </Link>
                     </div>
                    
                     <p className="pr-43 text-black">
                        {description}
                     </p>
                  </div>
                  <div className="da-footer__top-social mb-30 text-black">
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
<FloatingWhatsApp  phoneNumber="+918344445511"
        accountName="LoopTech"
        allowEsc
        allowClickAway
        notification
        notificationSound="true" 
        placeholder="Type..."
        statusMessage="Online"
        chatMessage="How can i help you?"
        avatar='/favicon.png'/>

        </>
    );
};

export default Footer;
