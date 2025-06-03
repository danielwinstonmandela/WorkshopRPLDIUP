'use client'
import React from "react";
import HeaderSlider from "@/src/components/HeaderSlider";
import HomeProducts from "@/src/components/HomeProducts";
import Banner from "@/src/components/Banner";
import NewsLetter from "@/src/components/NewsLetter";
import FeaturedProduct from "@/src/components/FeaturedProduct";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
