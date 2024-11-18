import React from 'react'
import LHfooter from "../components/portfolio-details/lhfooter"
import Wrapper from '../layout/wrapper'
import SEO from '../common/seo'
import Header from '../layout/headers/header'
import Footer from '../layout/footers/footer'
import PortfolioArea from '../components/homes/home-8/portfolio-area'


function LooperHub() {
  return (
    <>
     <Wrapper>
            <SEO pageTitle={"LooperHub - MacroLoop Technologies "} />
            <Header/>
            <PortfolioArea />
            <LHfooter/>
            <Footer/>
     </Wrapper>
    
    </>
  )
}

export default LooperHub
