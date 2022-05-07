import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Footer from "components/Footer/Footer";

import "./Home.css";

function Home() {
  // const data = {
  //   navbar: { profileimagesrc: "src" },
  //   articleone: {
  //     title: "Astronauts could land on Red Planet by 2039",
  //     articleExtras: {
  //       source: "space.com",
  //       timeAgo: "20m",
  //       topic: "science",
  //     },
  //   },
  //   weather: "weather",
  //   stocks: "stocks",
  //   articletwo: {
  //     title: "Arctic sea ice extent hits record low for winter maximum",
  //     articleExtras: {
  //       source: "CNN",
  //       timeAgo: "1h",
  //       topic: "environment",
  //     },
  //   },
  //   scores: "scores",
  // };
  return (
    <Flex direction="column" className="home">
      <Navbar />
      <Layout />
      <Footer />
    </Flex>
  );
}

export default Home;
