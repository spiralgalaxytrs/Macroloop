import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import Blog from "../";

const Blog = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Blog" title="News & Feeds" />
      <Blog/>
      <Footer tp_border={true} />
    </>
  );
};

export default Blog;
