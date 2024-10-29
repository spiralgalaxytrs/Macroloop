import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
import Solutions from "../../../data/rk.json"
import High_Tech_Laboratory_index from "@/src/components/Edu-Tech/High-Tech-Laboratory";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <High_Tech_Laboratory_index/>
    </>
  );
};

export default index;
