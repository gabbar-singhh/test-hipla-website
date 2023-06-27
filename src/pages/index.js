import Head from "next/head";
import styled from "styled-components";
// import Script from "next/script";
import HeroSection from "@/components/HeroSection/HeroSection";
import VmsSection from "@/components/MRM_Section/MrmSection";

import {
  Hero,
  Products,
  Clients,
  TabsView,
  Testimonials,
  VideoCTA,
} from "../components/Home";

const Home = ({ forModalOpen }) => {
  return (
    <section>
      <HeroSection />
      <VmsSection/>

      {/* <Hero /> */}
      {/* <div className="maindiv1"> */}
      {/* <Clients /> */}
      {/* <Products /> */}
      {/* <VideoCTA forModalOpen={forModalOpen} /> */}
      {/* <TabsView /> */}
      {/* <Testimonials /> */}
      {/* </div> */}
    </section>
  );
};

export default Home;
