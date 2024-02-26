import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";



const PortfolioItemsArea = ({data}) => {
  
  return (
    <>
      <div className="tp-portfoliop-page-area pt-120 pb-120 dark-bg">
        <div className="container">


         


          <motion.div layout className="row tp-portfolio-isotop-active">
            {data.Solutions.map((item, i) => (
              <div
                key={i}
                className={`col-6 tp-portfolio-item mb-25 w-img ${item.cls}`}
              >
                <div className="pf-item-wrapper p-relative">
                  <div className="pf-single-item">
                    <img src={`/assets/img/solutions/${item.img}`} alt={item.title} />
                  </div>
                  <div className="pf-single-item__info">
                    <span>{item.st}</span>
                    <h3 className="pf-single-item__title">
                      <Link href={`/solutions/Digital-Transformation/${item.id}`}>{item.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        
        </div>
      </div>
    </>
  );
};

export default PortfolioItemsArea;
