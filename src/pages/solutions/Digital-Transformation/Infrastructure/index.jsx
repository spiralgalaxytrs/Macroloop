import React from "react";
import SEO from "../../../../common/seo";
import Service from "../../../../components/serve";
// import Solutions from "../../../data/rk.json"
import Infrastructure_index from "../../../../components/infrastructure-it";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <Infrastructure_index />
    </>
  );
};

export default index;