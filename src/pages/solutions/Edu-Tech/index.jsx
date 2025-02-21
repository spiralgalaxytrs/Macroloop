import React from "react";
import SEO from "../../../common/seo";
import Service from "../../../components/serve";
import Solutions from "../../../data/rk.json"
import EduTech_index from "../../../components/Edu-Tech";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <EduTech_index/>
    </>
  );
};

export default index;