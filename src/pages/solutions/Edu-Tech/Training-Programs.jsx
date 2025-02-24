import React from "react";
import SEO from "../../../common/seo";
import Service from "../../../components/serve";
import Solutions from "../../../data/rk.json"
import Training_Programs_index from "../../../components/Edu-Tech/Training-Programs";


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
