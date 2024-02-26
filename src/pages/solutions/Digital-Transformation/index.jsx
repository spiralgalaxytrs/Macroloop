import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/serve";
import Solutions from "../../../data/rk.json"


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      <Service data={Solutions} />
    </>
  );
};

export default index;
