import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
// import Solutions from "../../../data/rk.json"
import Security_index from "@/src/components/security-systems";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      < Security_index />
    </>
  );
};

export default index;