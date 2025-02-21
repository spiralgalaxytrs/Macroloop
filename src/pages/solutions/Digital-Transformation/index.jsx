import React from "react";
import SEO from "../../../common/seo";
import Service from "../../../components/serve";
import Solutions from "../../../data/rk.json"
import Digital_index from "../../../components/digital-transformation";


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
