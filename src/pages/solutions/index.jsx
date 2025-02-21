import React from "react";
import SEO from "../../common/seo";
import Service from "../../components/service";
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
