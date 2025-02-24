import React, { useEffect, useState } from 'react'
import LHfooter from "../components/portfolio-details/ihfooter2"
import LHfooterMobile from "../components/portfolio-details/ihfooter3"
import Wrapper from '../layout/wrapper'
import SEO from '../common/seo'
import Header from '../layout/headers/header'
import Footer from '../layout/footers/footer'
import PortfolioArea from '../components/homes/home-8/portfolio-area-new'


function Products() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Check on resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <>
     <Wrapper>
            <SEO pageTitle={"Products - MacroLoop Technologies "} />
            <Header/>
            {/* <PortfolioArea /> */}
            {isMobile ? <LHfooterMobile /> : <LHfooter />}
            <Footer style_8={true} style_10 ={true}/>
     </Wrapper>
    
    </>
  )
}

export default Products
