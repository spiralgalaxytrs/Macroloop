import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import PortfolioArea from "../../common/portfolio-area";
import JobDetailsArea from "./job-details-area";

const JobDetails = ({data}) => {
  
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Solutions"  title={data?.title}/>
      <JobDetailsArea data={data} />
      {/* <PortfolioArea /> */}
      <Footer />
    </>
  );
};

export default JobDetails;
