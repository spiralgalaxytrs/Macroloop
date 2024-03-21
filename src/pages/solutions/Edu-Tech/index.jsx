import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
import Solutions from "../../../data/rk.json"
import EduTech_index from "@/src/components/Edu-Tech";


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