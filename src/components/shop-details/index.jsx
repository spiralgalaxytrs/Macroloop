import BreadcrumbArea from "../../common/breadcrumb-area";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import React from "react";
import RelatedProducts from "./related-products";
import ShopDetailsArea from "./shop-details-area";

const ShopDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Shop Details" title="Shop Details" />
      <ShopDetailsArea />
      <RelatedProducts />
      <Footer tp_border={true} />
    </>
  );
};

export default ShopDetails;
