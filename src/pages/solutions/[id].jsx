import React from "react";
import SEO from "../../common/seo";
import JobDetails from "../../components/job-details";
import data from "../../data/solution1.json"

export const getStaticProps = async ({params})=>{
  const datas = data.Solutions.filter(p=>p.id.toString()=== params.id)
  return {
    props:{
      datas,
      },
    }
  }

  export const getStaticPaths = () => {
    // Remove the manual paths and return an empty array
    return { paths: [], fallback: false };
  };

const index = ({datas}) => {
  const [data] = datas
  return (
    <>
      <SEO pageTitle={`${data?.title}- MacroLoop Technologies `} />
      <JobDetails data={data} />
    </>
  );
};

export default index;
