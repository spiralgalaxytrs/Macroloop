import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/service";
import Solutions from "../../data/solutions.json"


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MACROLOOP TECHNOLOGIES"} />
      <Service data={Solutions} />
    </>
  );
};

export default index;
