import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import {
  Hero,
  Products,
  Clients,
  TabsView,
  Testimonials,
  VideoCTA,
} from "../components/Home";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
    </>
  );
}
