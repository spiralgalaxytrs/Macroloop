import React from "react";
import SEO from "../../../../common/seo";
import Service from "../../../../components/serve";
// import Solutions from "../../../data/rk.json"
import Security_index from "../../../../components/security-systems";


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