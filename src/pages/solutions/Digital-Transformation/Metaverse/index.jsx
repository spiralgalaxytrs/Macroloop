import React from "react";
import SEO from "@/src/common/seo";
import Metaverse_index from "@/src/components/digital-transformation/metaverse-solution";


const index = () => {
  return (
    <>
      <SEO pageTitle={"SOLUTIONS - MacroLoop Technologies "} />
      {/* <Service data={Solutions} /> */}
      <Metaverse_index/>
    </>
  );
};

export default index;
