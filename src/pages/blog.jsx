import React from "react";
import SEO from "../common/seo";
import Blog from "../components/blog-pages/blog";

const index = () => {
  return (
    <>
      <SEO pageTitle={"BLOG - MACROLOOP TECHNOLOGIES"} />
      <Blog />
    </>
  );
};

export default index;
