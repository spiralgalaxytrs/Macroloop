import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MACROLOOP TECHNOLOGIES"} />
       <HomeOne />
    </Wrapper>
  );
};

export default Home;
