import React from 'react'
import BreadcrumbArea from "@/src/common/breadcrumb-area";
import LHfooter from "../components/portfolio-details/lhfooter"
import Wrapper from '../layout/wrapper'
import SEO from '../common/seo'
import Header from '../layout/headers/header'
import Footer from '../layout/footers/footer'
import LooptechSyanpseDetails from '../components/LooptechSyanpseDetails'


function LooptechSyanpse() {
  return (
    <>
     <Wrapper>
            <SEO pageTitle={"Looptech Syanpse - MacroLoop Technologies "} />
            <Header/>
            <BreadcrumbArea acive_menu="Looptech Syanpse" title="Looptech Syanpse" />
            <LooptechSyanpseDetails />
          {/* <LHfooter/> */}
            <Footer/> 
     </Wrapper>
    
    </>
  )
}

export default LooptechSyanpse;
