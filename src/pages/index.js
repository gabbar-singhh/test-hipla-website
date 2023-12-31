import Head from "next/head";
import styled from "styled-components";
import HeroSection from "@/components/HeroSection/HeroSection";
import MrmSection from "@/components/MrmSection/MrmSection";

import VmsSection from "@/components/VmsSection/VmsSection";

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
      <MrmSection />
      <VmsSection />

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
