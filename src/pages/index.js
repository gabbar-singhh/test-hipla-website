import Head from "next/head";
import styled from "styled-components";
// import Script from "next/script";

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
    <div>
      <Head>
        <title>Visitor Management Systems (VMS) - Hipla</title>
        <meta
          name="description"
          content="Automates workplace experiences with Hipla visitor management system, employee sign in, meeting room booking system and digital access control system"
        />
        <meta
          name="keywords"
          content="visitor management system, visitor management system, vms, meeting room booking system, access control system, attendance management system,visitor management"
        />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="canonical" href="https://hipla.io/" />
      </Head>
      <Main>
        <Hero />
        <div className="maindiv1">
          <Clients />
          <Products />
          <VideoCTA forModalOpen={forModalOpen} />
          <TabsView />
          <Testimonials />
        </div>
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.div``;
