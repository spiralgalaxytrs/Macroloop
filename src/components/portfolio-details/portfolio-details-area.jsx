import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";



// working_process_data 
const working_process_data = [
    {
        id: 1,
        bg_color: "",
        icon: "flaticon-sketchbook",
        title: "Strat From Sketch",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 2,
        bg_color: "cornblue-bg",
        icon: "flaticon-sketchbook",
        title: "Creative Process",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 3,
        bg_color: "orange-bg",
        icon: "flaticon-sketchbook",
        title: "Design & Development",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 4,
        bg_color: "blue-bg",
        icon: "flaticon-sketchbook",
        title: "Design & Development",
        desctiption: "Maximize your presence on search engine results pages.",

    },
]

// img_gallery_working_process

const img_gallery_working_process = [
    "/assets/img/portfolio/pf-details-gl-1.jpg",
    "/assets/img/portfolio/pf-details-gl-2.jpg",
    "/assets/img/portfolio/pf-details-gl-3.jpg",
]


// study_overview
const study_overview = [
    {
        id:1, 
        lists : [
             <>When it comes to Headless CMS systems, I’m a big fan of Ghost. Ghost is open-source and simple to use.</>,
             <>Oh, and it’s 100% free to set up and run. That’s because we will be running our Ghost instance locally</>
        ]
    },
    {
        id:2, 
        lists : [
             <>In this article, I will show you how you can use Ghost and  Gatsby together to get the ultimate personal blog</>,
             <>and then deploying to Netlify, taking advantage of their generous free tier.</>
        ]
    }
]


const PortfolioDetailsArea = () => {

  return (
    <>
      <div className="tp-pf-details-page-area pt-50 wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img">
<Link href="/contact">
<img src="/assets/img/portfolio/pf-details-thum.jpg" alt="" />
</Link>
                </div>
                {/* <div className="pf-details-banner__info">
                  <div className="row align-items-center align-items-xl-start">
                    <div className="col-lg-8">
                      <div className="pf-details-banner__info-left pl-30">
                        <span>
                          <b>Learn</b> 
                        </span>
                        <span>
                          <b>Contribute</b> 
                        </span>
                        <span>
                          <b>Grow</b>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="pf-details-banner__info-right text-lg-end pl-30">
                        
                         <Link href="/contact">
                         Contact Us
                          <span>
                            <i className="fal fa-long-arrow-right"></i>
                          </span></Link>
                        
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-60">
        <div className="container wow tpfadeUp">
          <p>
          "Learn-Contribute-Grow" (LCG) is an exceptional program offered by Looptech that provides an inclusive community platform for students, freelancers, and startups. LCG aims to connect like-minded groups and individuals, fostering a collaborative environment where participants can freely share ideas, suggestions, support, and resources to develop and enhance their innovations or startups.
            
          </p>
          <p>
          By joining LCG, you gain access to a vibrant network of mentors who possess valuable industry experience. These mentors, along with educationists and researchers boasting qualified practical expertise, offer valuable guidance and support to help you navigate the challenges and opportunities encountered during your entrepreneurial journey.
          </p>
          <p>
         One of the key features of LCG is the ability to showcase your services to individuals and companies seeking your specific skill set. This platform not only facilitates connections but also enables fruitful collaborations, enabling you to work hand in hand with those in need of your expertise.
         </p>
          <div className="pf-dt-img-gallery mb-30">
            <div className="row">
              {img_gallery_working_process.map((item, i) => (
                <div key={i} className="col-lg-4 wow tpfadeUp">
                  <div
                    className="pf-details-img-gl w-img mb-30 "
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                    <img src={item} alt="theme-pure" />
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        
       
         <p>
         Furthermore, LCG has established collaborations with numerous Business and Technology Incubators, widening your horizons and providing you with a diverse range of companies and startups to engage with. Whether you are seeking partners, looking to make purchases, aiming to sell your products or services, or eager to collaborate on innovative projects, LCG offers you a plethora of options to explore.
         </p>
         <p>
         Moreover, LCG offers an exclusive opportunity to access Loop Tech's Innovative Team, a dedicated group of experts ready to provide support and assistance for your viable innovations. With their vast knowledge and resources, the Innovative Team stands poised to propel your ideas forward and help transform them into tangible successes.
         </p>
         <p>
         If you are eager to take your innovation or startup to new heights, we invite you to join LCG today. By becoming a member, you gain entry into a thriving community, access to invaluable mentorship, and a world of possibilities to collaborate, learn, and grow.
         </p>
        </div>
         <div className="container d-flex justify-content-center" >
         <div
                className="da-header-gey-btn d-inline-block wow tpfadeUp"
                data-wow-delay=".5s"
              >
                <Link href="https://forms.gle/kUcPf5uABWBxdjKq9" className="tp-black-btn">
                        Join LCG
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                  <b></b>
                </Link>
              </div>

        </div>

        {/* <!-- cta are  --> */}
        <CtaArea/>  
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
