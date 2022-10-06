import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import Tech from "../components/Tech";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Tech />
    </>
  );
};

export default Home;
