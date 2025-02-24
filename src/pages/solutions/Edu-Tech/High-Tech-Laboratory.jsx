import React from "react";
import SEO from "../../../common/seo";
import Service from "../../../components/serve";
import Solutions from "../../../data/rk.json"
import High_Tech_Laboratory_index from "../../../components/Edu-Tech/High-Tech-Laboratory";


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
