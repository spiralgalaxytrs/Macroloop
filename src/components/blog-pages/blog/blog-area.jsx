import our_blog_data from '../../../data/our-blog-data';
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
           
               
                <div className="row">

                {our_blog_data.map((item, i) => 
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