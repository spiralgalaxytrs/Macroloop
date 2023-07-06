import React from "react";
import SEO from "@/src/common/seo";
import JobDetails from "@/src/components/job-details";
import data from "../../data/solutions.json"

export const getStaticProps = async ({params})=>{
  const datas = data.Solutions.filter(p=>p.id.toString()=== params.id)
  return {
    props:{
      datas,
      },
    }
  }

export const getStaticPaths = async()=>{
  const paths = data.Solutions.map(data=>({
    params:{ id: data.id.toString()},
    
  }))
  
  return {paths, fallback : false }
}

const index = ({datas}) => {
  const [data] = datas
  return (
    <>
      <SEO pageTitle={`${data?.title}- MACROLOOP TECHNOLOGIES`} />
      <JobDetails data={data} />
    </>
  );
};

export default index;
