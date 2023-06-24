import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';

const blog_content = {
    title: "Our Blogs",
    sub_title: "Blog & Insights",
    btn: "More News"
}

const {title, sub_title, btn}  = blog_content

const Blog = () => {
    return (
        <>
            <div className="ptg-blog-area dark-bg pt-120 pb-90">
            <div className="container">
            <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-title-wraper mb-60">
                <div className="tp-section">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp"
                    data-wow-delay=".3s"
                  > 
                     {title}
                  </span>
                  <h2
                    className="tp-section__title text-white mb-30 wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    Our <span> {sub_title}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="da-blog-btn-wrapper text-md-end mb-60 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link
                  href="/blog-list"
                  className="tp-border-btn br-btn-bg-dark"
                >
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
               
                <div className="row">

                {our_blog_data.slice(10, 13).map((item, i) => 
                    <div key={i} className="col-xl-4 col-lg-6">
                        <div className="ptg-blog__item mb-30 wow tpfadeUp" data-wow-delay={item.delay}>
                            <div className="ptg-blog__item-thumb w-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="ptg-blog__item-content dark-bg-2">
                                <div className="ptg-blog__item-meta">
                                    <span><a href="#"><b className="ptg-blog-cta">{item.category}</b></a></span>
                                    <span><a href="#"> / <b> {item.month} {item.date}</b></a> </span>
                                </div>
                                <h3 className="ptg-blog__item-title"><Link href="/blog-details">{item.title}</Link></h3>
                                <Link href="/blog-details" className="ptg-blog-btn text-uppercase">Read More
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
            </div>
        </div>
        </>
    );
};

export default Blog;