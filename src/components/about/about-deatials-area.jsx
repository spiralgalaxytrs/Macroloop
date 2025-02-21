import Link from 'next/link';
import React from 'react';



const about_details_content  = {
    title: <>Associate with us to adapt the Forthwith Technologies</>,


    info_2000: <>
    
 We recognize that businesses need
    to concentrate on their core
    competencies to thrive in today's
    dynamic market. Therefore, our
    solutions
    are
    designed
    to
    streamline operations, automate
    processes, and optimize resource
    allocation, allowing our customers
    to redirect their major focus and
    resources towards their core
    activities.</>,

    info_2010: <>Our comprehensive approach to Industry 4.0 encompasses not only
    technological integration but also strategic guidance and support. We work
    closely with our customers to understand their unique challenges and goals,
    providing tailored solutions that align with their specific needs. We assist them
    in charting their digital transformation journey, ensuring that they can navigate
    the complexities of this rapidly evolving landscape with confidence.</>,
    
  

}

const {
   title, 
   info_2000, 
   info_2010, 
  } = about_details_content


const AboutDeatialsArea = () => {
    return (
        <>
            <div className="tp-about-deatials-service dark-bg pt-55 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="tp-about-sv-content">
                     <h3 className="tp-section__title wow text-black tpfadeUp mb-50">{title}</h3>
                  </div>
                  <div className="tp-ab-sv-tabs mb-30">
                     <ul className="nav nav-pills mb-30" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                           <button tabIndex="-1" className="nav-link active" id="2000" data-bs-toggle="pill" data-bs-target="#pills-2000"
                              type="button" role="tab" aria-controls="pills-2000" aria-selected="true">Why LoopTech?</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button tabIndex="-1" className="nav-link" id="2010" data-bs-toggle="pill" data-bs-target="#pills-2010"
                              type="button" role="tab" aria-controls="pills-2010" aria-selected="false">Let's Collaborate</button>
                        </li>
                        
                     </ul>
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-2000" role="tabpanel" aria-labelledby="2000">
                           <div className="tp-ab-sv-tabs-content">
                              <p className='text-black'>{info_2000}</p>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2010" role="tabpanel" aria-labelledby="2010">
                           <div className="tp-ab-sv-tabs-content">
                              <p className='text-black'>{info_2010}</p>
                           </div>
                        </div>
                       
                     {/* ---Advisory part ---*/}
                     {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", maxWidth: "550px" }}>
                     <h6 className='text-black font-size-16' style={{ color: "#333", marginBottom: "16px",color:"#333" }}>Our Advisory Board</h6>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                        {["Mr.Vijay Balah", "Mr.Sebin Sunny P"].map((member, index) => {
                          const images = ["/assets/img/services/no1.jpg", "/assets/img/services/no2.jpg"];
                          const designations=["Regional Head-Sales","Cheif Executive Officer"];
                          const organizations=["VisiLean","TBI,Thigarajar College of Engineering"];
                          return (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px", border: "1px solid #ddd", borderRadius: "8px",width:"230px", maxWidth: "270px", backgroundColor: "#fff" }}>
                              <img src={images[index]} alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "12px" }} />
                              <h6 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px", color: "#333" }}>{member}</h6>
                              <p style={{ fontSize: "14px", color: "#555", marginBottom: "4px" }}>{designations[index]}</p>
                              <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px", textAlign: "center" }}>{organizations[index]}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>  */}




                     </div>
                  </div>
                  <div className="tp-sv-tabs-btn-wrapper mb-30">
                     <Link href="/contact" className="tp-black-btn">
                        Contact Us
                        <span className="ml-10">
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                     </Link>
                  </div>
               </div>


               
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="about-sv-img">
                     <img src="/assets/img/services/about-service.jpg" alt="" />
                  </div>
               </div>



             
            </div>
        
         </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", borderRadius: "8px", marginTop: "20px", marginBottom: "0px", backgroundColor:"#ececec"}}>
        <h6 className='text-black' style={{ color: "#333", marginBottom: "16px", fontSize: "40px" }}>Our Advisory Board</h6>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            {["Mr.Vijay Balah", "Mr.Sebin Sunny P"].map((member, index) => {
                const images = ["/assets/img/services/no1.jpg", "/assets/img/services/no2.jpg"];
                const designations = ["Regional Head-Sales", "Chief Executive Officer"];
                const organizations = ["VisiLean", "TBI,Thigarajar College of Engineering"];
                const linkedinUrls = [
                    "https://www.linkedin.com/in/vijaybalah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "https://www.linkedin.com/in/sebinsunny?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                ];
                return (
                    <div key={index} style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        padding: "8px", 
                        border: "1px solid #ddd", 
                        borderRadius: "8px", 
                        width: "500px", 
                        maxWidth: "500px", 
                        backgroundColor: "#fff", 
                        transition: "box-shadow 0.3s ease, transform 0.3s ease", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                        transform: "scale(1)",
                        cursor: "pointer",
                        marginBottom:"30px"
                    }} 
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        e.currentTarget.style.transform = "scale(1)";
                    }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                            <img src={images[index]} alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                           
                        </div>
                        <h6 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px", color: "#333" }}>{member}</h6>
                        <p style={{ fontSize: "14px", color: "#555", marginBottom: "4px" }}>{designations[index]}</p>
                        <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px", textAlign: "center" }}>{organizations[index]}</p>
                        <a href={linkedinUrls[index]} target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", fontSize: "24px", marginLeft: "10px" }}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                    </div>
                );
            })}
        </div>
    </div>
    
        </>
    );
};

export default AboutDeatialsArea;