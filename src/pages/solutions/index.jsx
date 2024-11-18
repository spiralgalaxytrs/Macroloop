import React from "react";
import SEO from "@/src/common/seo";
import Service from "@/src/components/service";
import Solutions from "../../data/solution1.json"


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      <Service data={Solutions} />
    </>
  );
};

export default index;
