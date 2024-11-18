import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
import Solutions from "../../../data/rk.json"
import Training_Programs_index from "@/src/components/Edu-Tech/Training-Programs";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <Training_Programs_index/>
    </>
  );
};

export default index;
