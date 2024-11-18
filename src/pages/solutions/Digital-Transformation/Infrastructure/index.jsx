import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
// import Solutions from "../../../data/rk.json"
import Infrastructure_index from "@/src/components/infrastructure-it";


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