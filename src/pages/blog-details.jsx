import React from "react";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-pages/blog-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"MACROLOOP TECHNOLOGIES - Blog Details"} />
      <BlogDetails />
    </>
  );
};

export default index;
