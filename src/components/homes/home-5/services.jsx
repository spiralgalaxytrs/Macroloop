import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';
import Solutions from "../../../data/solution1.json"


const Services = () => {
    return (
        <>
            <div className="ptg-blog-area dark-bg pt- pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wraper text-center">
                            <div className="tp-section">
                                {/* <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">Studio News</span> */}
                                <h2
                                    className="tp-section__title text-non-rgb tp-rgb-border text-black text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".4s">
                                    Our Solutions
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">

                {Solutions.Solutions.map((item, i) => 
                    <div key={i} className="col-xl-4 col-lg-6 mb-4">
		
                        <div className="ptg-blog__item mb-30 wow tpfadeUp shadow p-3 rounded-2 h-100 mb-0 hover-card" data-wow-delay={item.delay}  style={{position:'relative'}}>
                            <div className="ptg-blog__item-thumb w-img" >
                                <img src={`/assets/img/solutions/${item.img}`} height={190} alt="" />
                            </div>
                            <div className="ptg-blog__item-content white-bg-2 border-2">
                                <div className="ptg-blog__item-meta">
                                    <span><a href="#"><b className="ptg-blog-cta">{item.category}</b></a></span>
                                    {/* <span><a href="#"> / <b> {item.month} {item.date}</b></a> </span> */}
                                </div>
                                <h3 className="ptg-blog__item-title text-black"><Link href={`/solutions/${item.id}`} className='title'>{item.title}</Link></h3>
                                
                            </div> 
                            <div className="d-flex flex-row-reverse" style={{position:'absolute', bottom : '40px', right : '40px' }}>
                                <Link href={`/solutions/${item.id}`} className="ptg-blog-btn">Read More
                                    <span className="pl-10">
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }
                </div>
                {/* <div className="job-btn-wrapper text-center">
                     <Link href="/solutions" className="tp-black-btn wow tpfadeUp">
                        See More
                        <span>
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                     </Link>
                  </div> */}
            </div>
        </div>
        </>
    );
};

export default Services;
