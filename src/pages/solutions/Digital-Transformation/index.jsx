import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
import Solutions from "../../../data/rk.json"
import Digital_index from "@/src/components/digital-transformation";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      < Digital_index/>
    </>
  );
};

export default index;
