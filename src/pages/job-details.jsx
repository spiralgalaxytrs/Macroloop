import React from "react";
import SEO from "../common/seo";
import JobDetails from "../components/job-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"MACROLOOP TECHNOLOGIES - Job Details"} />
      <JobDetails />
    </>
  );
};

export default index;
