import React from "react";
import styled from "styled-components";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

import { Footer } from "../components";
import Transition from "../components/Transition";
import ModalVideo from "react-modal-video";
import { init } from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/modal-video.min.css";
import "../styles/hero.css";
import "../styles/phone.css";
import Head from "next/head";

init("GhcJn2tnE7meu1tE2");

export const pageview = (url) => {
  window.gtag("config", "UA-167742459-1", {
    page_path: url,
  });
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hipla.io</title>
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

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

const Main = styled.div`
  margin-top: 80px;
`;

const StyledModalVideo = styled(ModalVideo)`
  z-index: 999999;
`;
