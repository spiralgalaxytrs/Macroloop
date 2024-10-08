import React from "react";
import SEO from "@/src/common/seo";
import IOT_index from "@/src/components/digital-transformation/iot-solution";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <IOT_index/>
    </>
  );
};

export default index;
