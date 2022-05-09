import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Footer from "components/Footer/Footer";

import profileImage from "images/Navbar/Avatar.png";

function Home() {
  return (
    <Flex direction="column" className="home">
      <Navbar profileImageSrc={profileImage} />
      <Layout />
      <Footer />
    </Flex>
  );
}

export default Home;
