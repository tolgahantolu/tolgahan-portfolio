import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import Tech from "../components/Tech";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Tech />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
