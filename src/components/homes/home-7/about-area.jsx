
import React from 'react';


const about_content = {
    img_1: "/assets/img/about/about1.jpeg",
    img_2: "/assets/img/about/about2.jpeg",
    img_3: "/assets/img/about/1.jpg",
    img_4: "/assets/img/about/it-ab-avata.png",

    left_title: "Keep Pushing Limits Apart",
    title: <>about our lawyer <br /> firm agency</>,
    about_P_title: <>We help you build and  grow your business.</>,
    des: <>At MacroLoop Technologies  Pvt Ltd, we vision to be the most sought
    customer - centric company providing integrated technology solutions to
    enhance the growth and sustainability of business and reliability on data. We
    also focus on equipping the students with most sought Industry 4.0
    technologies.</>,
    des1:<>We develop and collaborate with the industry's leading Original Equipment
    Manufacturers (OEMs) to seamlessly incorporate the most suitable and cutting-edge
    technologies, enabling us to create innovative solutions in the realm of Industry 4.0. Our
    primary objective is to alleviate the challenges faced by our customers, providing them
    with valuable problem-solving capabilities and actively support them on their journey
    of digital transformation, empowering them to enhance their productivity and
    manageability.</>
}

const {img_1, img_2, img_3, img_4, img_5,  left_title, title,about_P_title, des, des1}  = about_content 




const AboutArea = ({style_about}) => {
    return (
        <>
        <div className="law-about-area pt-50 pb-30 dark-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 wow tpfadeUp">
                        <div className="law-about-left p-relative mb-30">
                            <div className="row gx-4">
                                <div className="col-md-6">
                                    <div className='col-12 mb-5'>
                                        {/* <span><i className="flaticon-global"></i></span>
                                        <span>{left_title}</span> */}
                                        <img className='shadow rounded img-fluid' src="assets/img/about/keeppushing.jpg" alt="about-image" style={{height: "210px",width:"295px",objectFit: "cover"}} />
                                    </div>
                                    <div className="law-about-img-1">
                                        <img className="shadow rounded img-fluid" src={img_1} alt="" style={{height: "210px",width:"295px",objectFit: "cover"}}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="law-about-img-2 col-12 mb-5">
                                        <img className="shadow rounded img-fluid" src={img_2} alt=""  style={{height: "210px",width:"295px",objectFit: "cover"}}/>
                                    </div>
                                    <div className="law-about-img-2">
                                        <img className="shadow rounded img-fluid" src={img_3} alt=""  style={{height: "210px",width:"295px",objectFit: "cover"}}/>
                                    </div>
                                
                                </div>
                                
                                   
                            </div>
                           
                             
                        </div>
                    </div>
                    <div className="col-xl-6 wow tpfadeUp">
                        <div className="mb-50">
                            <div className="section-title-wraper mb-40">
                                <div className="tp-section">
                                 
                                    <h2 className={`tp-section__title text-black ${style_about ? "wow tpfadeUp mb-30" : "wine-text-color mb-20 text-uppercase"}`}>
                                        { style_about ? about_P_title : title
                                        }
                                    </h2>
                                    <p className="text-black">
                                        {des}
                                    </p>

                                    <p className="text-grey">
                                        {des1}
                                    </p>
                                </div>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutArea;