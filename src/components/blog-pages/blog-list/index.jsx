import BreadcrumbArea from "../../../common/breadcrumb-area";
import Footer from "../../../layout/footers/footer";
import Header from "../../../layout/headers/header";
import React from "react";
import BlogListArea from "./blog-list-area";

const BlogList = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Blog list"  title="Blog list"/>
      <BlogListArea  />
      <Footer />
    </>
  );
};

export default BlogList;
