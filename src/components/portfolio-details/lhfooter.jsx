import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";


// working_process_data 
const working_process_data = [
    {
        id: 1,
        img:  "/assets/img/gallery/1.png",
        title: "Collaboration",
        desctiption: "LooperHub brings together startups, individuals, venture capitalists, and angel investors, fostering collaboration and creating opportunities for partnerships and growth.",

    },
    {
        id: 2,
        img:"/assets/img/gallery/2.png",
        title: "Continuous Learning",
        desctiption: "The app offers virtual classes and mentorship programs, ensuring users have access to valuable knowledge and resources to enhance their skills and stay up-to-date with the latest industry trends.",

    },
    {
        id: 3,
        img:"/assets/img/gallery/3.png",

        title: "User-Friendly Interface",
        desctiption: "With its intuitive and user-friendly interface, LooperHub provides a seamless and hassle-free experience, allowing users to navigate the platform effortlessly and make the most of its features.",

    },
    {
        id: 4,
        img:"/assets/img/gallery/4.png",
        title: "Goal Achievement",
        desctiption: "By providing tools, resources, and a supportive community, LooperHub helps users set and achieve their goals, whether it's launching a startup, expanding their network, or securing funding.",

    },
    {
      id: 1,
      img:"/assets/img/gallery/5.png",
      title: "Extensive Network",
      desctiption: "LooperHub connects users with a wide network of professionals, experts, and resources, enabling them to tap into valuable connections, gain insights, and access potential partnerships or investment opportunities.",

  },
  {
      id: 2,
      img:"/assets/img/gallery/6.png",
      title: "Personalized Recommendations",
      desctiption: " The app offers personalized recommendations and feedback based on user preferences, helping them discover relevant opportunities, content, and resources tailored to their specific needs and interests.",

  },
  {
      id: 3,
      img:"/assets/img/gallery/7.png",
      title: "Community Building",
      desctiption: " LooperHub focuses on community building and networking, providing a platform where users can connect, share ideas, seek advice, and collaborate to foster a vibrant and supportive entrepreneurial ecosystem",

  },
  {
      id: 4,
      img:"/assets/img/gallery/8.png",
      title: "Showcase and Connect",
      desctiption: "The app allows users to showcase their work, projects, or ideas, providing a platform to attract potential partners, investors, or customers and establish meaningful connections within the entrepreneurial community.",

  },
]






const PortfolioDetailsArea = () => {

  return (
    <>
    

     <div className="tp-pf-detials-main dark-bg">
      {/* <img src="/assets/img/breadcrumb/lhbg.png" width={"100%"}/> */}
        <div className="container wow tpfadeUp">
        
    
        <p style={{fontFamily:"Gotham" }}>
        Welcome to the future of networking and collaboration. MacroLoop Technologies proudly presents <b>LooperHub</b>, an elite social network app that seamlessly connects startups, individuals, venture
capitalists, and angel investors. <b>LooperHub</b> is the ultimate platform that empowers everyone to
engage with the vibrant startup and business ecosystem, fostering a dynamic environment for
growth and success. At its core, <b>LooperHub</b> facilitates a revolutionary concept known as Business to
Everyone (B2E) relationship. This innovative approach ensures that every user, regardless of their
background or aspirations, can leverage the app's powerful features to accomplish their goals.
Whether you're a startup seeking collaboration, an individual with a groundbreaking business idea,
or a student looking to enter the industry, <b>LooperHub</b> has you covered. Collaboration is key in
today's fast-paced business landscape, and <b>LooperHub</b> provides an unparalleled platform for
startups to connect with like-minded entrepreneurs. By leveraging the app, startups can easily find
potential collaborators and freelancers to work on projects together, fostering innovation and
maximizing potential. <b>LooperHub</b> serves as a thriving hub of creativity, where ideas can flourish and
partnerships can be forged.
          </p>
          <p style={{fontFamily:"Gotham" }}>
          For students aspiring to be industry-ready, <b>LooperHub</b> offers a unique opportunity to interact with
companies directly. Through the app, students can engage with businesses, gaining valuable insights
and training to develop the skills necessary for success. Virtual classes, hosted within the app itself,
provide a convenient means of acquiring new skills and earning certificates that enhance
employability. <b>LooperHub</b> empowers individuals to take charge of their career trajectory and secure
rewarding opportunities. Entrepreneurs seeking funding for their startup ventures can seamlessly
connect with venture capitalists and angel investors through <b>LooperHub</b>. The app serves as a bridge,
connecting ambitious founders with investors who are actively seeking investment opportunities in
their respective product or service areas. By streamlining the investment process, <b>LooperHub</b> accelerates growth, propelling startups towards success.
          </p>
          <p style={{fontFamily:"Gotham" }}>
          Moreover, <b>LooperHub</b> simplifies the process of starting a business. Individuals with a basic business
idea can easily transform their vision into reality by utilizing the app's comprehensive suite of tools.
From developing a business plan to registering a company, <b>LooperHub</b> provides a seamless
experience. Furthermore, the app offers invaluable pitching mentorship and the potential for
securing investment opportunities, all within a single, intuitive platform. Join us on this extraordinary
journey as we revolutionize the startup and business ecosystem. <b>LooperHub</b> is more than just an
app; it's a gateway to success, empowering startups and businesses to achieve their short and longterm goals. Experience the power of LooperHub and unlock endless possibilities for growth,
collaboration, and innovation.
          </p>
         
          
          <p className="wow tpfadeUp" style={{fontFamily:"Gotham" }}>
          Welcome to <b>LooperHub</b>, where dreams become reality and makes you to push your limits.
          </p>

          <div className="pf-dt-process-wrapper pb-60">
            <div className="row">
              {working_process_data.map((item, i) => (
                <div key={i} className="col-lg-4 col-xl-3">
                  <div className="pf-dt-process-item  wow tpfadeUp text-center mb-60">
                        <Image src={item.img} width={250} height={250} alt="pure" />   
                    <h3 className="pf-dt-process-item__title text-white mb-10"style={{fontFamily:"Gotham" }}>
                      <a href="#">{item.title}</a>{" "}
                    </h3>
                    <p style={{fontFamily:"Gotham" }}>{item.desctiption}</p>
                  </div>
                </div>
              ))}
            </div>
        <div className="row">
            <div className="bs-cta-btns text-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeyl_iEMh8sRComDCda-kNumK6tBUyM374tiWK90aRXttU02Q/viewform?pli=1" className="tp-btn tp-btn-hover mr-30 wow tpfadeRight">
                Review LooperHub
                <span>
                  <i className="fal fa-long-arrow-right"></i>
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                <b></b>
              </Link>
              
            </div>
          </div>
          </div>
        </div>

        {/* <!-- cta are  --> */}
        <CtaArea />  
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
