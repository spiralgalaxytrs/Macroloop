import React from "react";
import CtaArea from "../homes/home-5/cta";
import Link from "next/link";
import Image from "next/image";




const ContentArea = () => {



  const img_gallery_working_process = [
    "/assets/img/portfolio/pf-details-gl-1.jpg",
    "/assets/img/portfolio/pf-details-gl-2.jpg",
    "/assets/img/portfolio/pf-details-gl-3.jpg",
  ]

  return (
    <>
      <div className="tp-pf-details-page-area wow dark-bg tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img w-imgggg">
                  
                    <img src="/assets/img/solutions/system-solutions.gif" alt="" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main dark-bg pt-3">
        <div className="container wow tpfadeUp">
          <p className="pt-lg-40" style={{ fontSize: "20px" }}>
            In an era where safety and efficiency are paramount, LoopTech's Safety Management Solutions
            harness the power of IoT technology to create a secure and streamlined operational environment. Our comprehensive suite of solutions is designed to address the multifaceted challenges facedbyindustries today, from asset tracking and people safety monitoring to cold chain management andperimeter security.
          </p>
        </div>
        <div className="container">
          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-8 col-12 right-padding mb-3 order-lg-0 order-md-0 order-2">
              <h2 className="mt-lg-0 mt-3">Asset Tracking</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech offers an asset tracking solution that utilizes IoT technology to monitor and manageassets in real time. The system provides visibility into asset location, usage, and condition, which enhances operational efficiency and reduces losses. It includes features like GPS
                tracking, geofencing, and alerts for unauthorized movements. The solution is designedfor
                various industries, ensuring compliance and safety through comprehensive asset
                management.
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-1">
                  Tracks asset location in real-time within predefined areas
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE", height: "18px" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  User-friendly interface requires minimal administrator training
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Accurate tracking across floors or warehouse sections
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Geo-fencing alerts for asset movement in/out of restricted zones
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Exportable reports in Excel and PDF for data analysis
                </div>
              </p>
            </div>
            <div className="col-lg-4 col-12 order-lg-0 order-md-0 order-1">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/1.jpg"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-4 col-12">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/2.jpg"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-12 left-padding mt-3">
              <h2 className="mt-lg-0 mt-3">People safety tracking</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech offers a comprehensive people safety solution for high-risk environments like underground tunnels.
                Using IoT technology, devices monitor worker locations in real time, sending alerts if an employee is inactive for extended periods, enabling rapid emergency responses.
                FIND wristbands allow employees to trigger alerts, enhancing safety. Bluetooth mesh and cloud integration ensure reliable data transmission
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Set boundaries with geo-fencing using circles or polygons
                </div>
              </p>
              <p className="pt-2 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Trigger alerts when someone enters or exits designated areas.
                </div>
              </p>
              <p className="pt-2 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  View activity on a dashboard with floor maps and COIN positions
                </div>
              </p>
              <p className="pt-2 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Real-time location tracking and user count in specific zones
                </div>
              </p>
              <p className="pt-2 mb-0  d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Applicable across industries for employee location and safety monitoring
                </div>
              </p>
            </div>

          </div>
          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-8 col-12 right-padding mb-3 order-lg-0 order-md-0 order-2">
              <h2 className="mt-lg-0 mt-3">Cold Chain Management</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech provides a cold chain monitoring solution to safeguard temperature-sensitive goods across the supply chain. IoT sensors continuously track temperature and humidity, sending real-time alerts for deviations.
                This proactive approach prevents spoilage and supports regulatory compliance, making it ideal for industries like pharmaceuticals and food, where strict environmental control is essential for product integrity
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Improved quality with full life cycle remote monitoring
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Real-time alerts for temperature and humidity changes
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Historical and current data reports accessible anytime, anywhere
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Notifications for doors left open
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Cost-effective monitoring solution
                </div>
              </p>
            </div>
            <div className="col-lg-4 col-12 order-lg-0 order-md-0 order-1">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/3.jpg"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>


          </div>
          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-4 col-12">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/7.webp"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-12 left-padding mt-3">
              <h2 className="mt-lg-0 mt-3">PIDS</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech's perimeter security solution employs IoT technology to protect property by detecting unauthorized intrusions. The system integrates sensors, cameras, and AI-powered analytics for real-time monitoring.
                It sends immediate alerts upon detecting breaches, allowing for quick responses. Ideal for critical infrastructure and large campuses, it distinguishes between human and non-human activity, significantly reducing false alarms and enhancing security
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Requires no additional infrastructure
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Detects multiple intrusions simultaneously, even with background noise
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  COINs detect vibration and motion for tampering or entry alerts
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Immediate WhatsApp alerts for real-time monitoring
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Loud siren activates instantly upon intrusion detection
                </div>
              </p>
            </div>
          </div>

<div className="row mt-2 mb-lg-5">
  <div className="col-lg-8 col-12">
    <div className="row">
      <div className="col-lg-6 col-12 mt-2">
        <div className="p-2" style={{ background: "#d4d2d2" }}>
          <video
            loop
            src="/assets/img/videos/Video2.mp4"
            type="video/mp4"
            style={{ width: "100%", height: "235px" }}
            onClick={(e) => {
              if (e.target.paused) {
                e.target.muted = false;
                e.target.play();
              } else {
                e.target.pause();
              }
            }}
          />
          <p className="mb-0 pt-2 text-center">Desktop AI for human detection</p>
        </div>
      </div>
      <div className="col-lg-6 col-12 mt-2">
        <div className="p-2" style={{ background: "#d4d2d2" }}>
          <video
            loop
            src="/assets/img/videos/Video1.mp4"
            type="video/mp4"
            style={{ width: "100%" }}
            onClick={(e) => {
              if (e.target.paused) {
                e.target.muted = false;
                e.target.play();
              } else {
                e.target.pause();
              }
            }}
          />
          <p className="mb-0 pt-2 text-center">Long-range human detection</p>
        </div>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-lg-6 col-12 mt-2">
        <div className="p-2" style={{ background: "#d4d2d2" }}>
          <video
            loop
            src="/assets/img/videos/Video3.mp4"
            type="video/mp4"
            style={{ width: "100%" }}
            onClick={(e) => {
              if (e.target.paused) {
                e.target.muted = false;
                e.target.play();
              } else {
                e.target.pause();
              }
            }}
          />
          <p className="mb-0 pt-2 text-center">
            Siren alert at command room; PTZ moves to coin location
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-12 mt-2">
        <div className="p-2" style={{ background: "#d4d2d2" }}>
          <video
            loop
            src="/assets/img/videos/Video5.mp4"
            type="video/mp4"
            style={{ width: "100%" }}
            onClick={(e) => {
              if (e.target.paused) {
                e.target.muted = false;
                e.target.play();
              } else {
                e.target.pause();
              }
            }}
          />
          <p className="mb-0 pt-2 text-center">
            Siren alert; PTZ moves to coin location
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-12 mt-2">
    <div className="p-2" style={{ background: "#d4d2d2" }}>
      <video
        loop
        src="/assets/img/videos/Video4.mp4"
        type="video/mp4"
        style={{ width: "100%", height: "530px" }}
        onClick={(e) => {
          if (e.target.paused) {
            e.target.muted = false;
            e.target.play();
          } else {
            e.target.pause();
          }
        }}
      />
      <p className="mb-0 pt-2 text-center">
        PTZ moves to coin location on alert for suspicious activity
      </p>
    </div>
  </div>
</div>



          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-8 col-12 right-padding mb-3 order-lg-0 order-md-0 order-2">
              <h2 className="mt-lg-0 mt-3">In-Plant vehicle Tracking</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech's in-plant vehicle tracking solution leverages IoT technology to monitor vehicle movement within industrial facilities, offering real-time data on location, speed, and route efficiency. 
                It improves safety and workflow efficiency by alerting management to unauthorized movements or operational issues, helping reduce accidents and downtime. This solution is ideal for large plants where vehicle coordination is critical, streamlining operations and enhancing overall productivity
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Improved workforce coordination
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Real-time process management
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Location-based workflow management
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Inexpensive and time saving process
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Entirely a digital solution with a cloud platform & analytics
                </div>
              </p>
            </div>
            <div className="col-lg-4 col-12 order-lg-0 order-md-0 order-1">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/5.jpg"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-lg-5 padding-section">
            <div className="col-lg-4 col-12">
              <div className="p-0 ">
                <Image
                  src="/assets/img/safety/6.jpg"
                  alt="img"
                  width={450}
                  height={500}
                  className="rounded-3 security-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-12 left-padding mt-3">
              <h2 className="mt-lg-0 mt-3">Predictive Maintenance</h2>
              <p className="pt-lg-4 mb-3">
                LoopTech's predictive maintenance solution utilizes IoT sensors and data analytics to monitor equipment conditions in real time, predicting potential failures before they occur. By tracking metrics such as temperature and vibration, the system facilitates proactive maintenance and minimizes downtime.
                This approach extends equipment life and reduces repair costs, making it ideal for industries aiming to enhance operational efficiency and prevent unexpected breakdowns
              </p>
              <h5 className="pt-3">
                <i className="fa-solid fa-arrow-left  pe-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
                <span >FEAT</span>URES
                <i className="fa-solid fa-arrow-right ps-2" style={{ color: "#0849BE", fontSize: "18px" }}></i>
              </h5>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Monitors machine performance and generates utilization reports
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Sends alarms when machines idle beyond set limits
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Uses cost-effective 4G/LTE with multi-sim aggregation for data transmission
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Processes 4000 vibration readings/second with FFT for fault detection
                </div>
              </p>
              <p className="pt-3 mb-0 d-flex" style={{fontSize:"17px"}}>
                <div className="mt-1">
                  <i className="fa-solid fa-circle-chevron-right pe-2" style={{ color: "#0849BE" }}></i>
                </div>
                <div className="mt-0 mt-lg-1">
                  Analytics dashboard visualizes data and supports predictive maintenance
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cta are  --> */}
      <CtaArea />
      {/* <!-- cta end --> */}

    </>
  );
};

export default ContentArea;