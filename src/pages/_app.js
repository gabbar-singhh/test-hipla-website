import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";

import { Header, Footer } from "../components";
import Transition from "../components/Transition";
import ModalVideo from "react-modal-video";
import { init } from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/modal-video.min.css";
import"../styles/hero.css";
import "../styles/phone.css";
import Head from "next/head";
// import "../assests/style/about.css";
// import "../assests/style/careers.css";
// import "../assests/style/case-study-home.css";
// import "../assests/style/case-study-single.css";
// import "../assests/style/contact.css";
// import "../assests/style/help-center.css";

init("GhcJn2tnE7meu1tE2");

export const pageview = (url) => {
  window.gtag("config", "UA-167742459-1", {
    page_path: url,
  });
};

// const clientSideEmotionCache = createEmotionCache();

// const MyApp = (props) => {
//   const { Component, pageProps } = props;

//   const getLayout = Component.getLayout ?? ((page) => page);

//   const [isOpen, setOpen] = useState(false);
  // const [loading, setLoading] = useState(true);

//   const router = useRouter();

//   const handleRouteChange = (url) => pageview(url);


//   useEffect(() => {
//     router.events.on("routeChangeComplete", handleRouteChange);

//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, [router.events]);

//   useEffect(() => {
//     const intervalID = setTimeout(() => setLoading(() => false), 1000);

//     return () => clearInterval(intervalID);
//   }, []);

//   if (loading) {
//     return (
//       <>
//       <div className="loading">
//         <img src="/vectors/hipla-logo.svg" alt="Hipla logo" className="logo" />
//       </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
      // <StyledModalVideo
      //   channel="youtube"
      //   autoplay
      //   isOpen={isOpen}
      //   videoId="LNI_Zkkh6i8"
      //   onClose={() => setOpen(false)}
      // />

//       <Main>
//         <Transition location={router.pathname}>
//           {getLayout(<Component {...pageProps} forModalOpen={() => setOpen(true)} />)}
          // <Footer />
//         </Transition>
//       </Main>
//     </>
//   );
// };

// export default MyApp;

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <>
      <div className="loading">
        <img src="/vectors/hipla-logo.svg" alt="Hipla logo" className="logo" />
      </div>
      </>
    );
  }
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

const Main = styled.div`
  margin-top: 80px;
`;

const StyledModalVideo = styled(ModalVideo)`
  z-index: 999999;
`;
