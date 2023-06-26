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
