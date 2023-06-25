import React from "react";

import Hero from "./Hero";
import Brands from "./Brands";
import CoreValues from "./CoreValues";
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
    <title>About us - Hipla</title>
    <link rel="icon" href="/favicon.jpg" />
    <meta
      name="description"
      content="Hipla’s goal is to improve the experience of a billion+ people at their workplaces every day. From Advanced video analytics to Security and access control, we've built a 360* tool kit for facility management, HSE (health safety and security) protocols"
      key="visitor management solutions, high security environment, smart workspaces"
    />
      <meta
      name="keywords"
      content="visitor management solutions, high security environment, smart workspaces"
      />
    <link rel="canonical" href="https://hipla.io/about-hipla" />
  </Head>
      <Hero />
      <CoreValues />
      <Brands />
    </>
  );
};

export default About;
