import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Footer from "components/Footer/Footer";
import Drawer from "components/Drawer/Drawer";

import profileImage from "images/Navbar/Avatar.png";

import articleOneBackground from "./images/Article/articleOneBackground.png";
import articleTwoBackground from "./images/Article/articleTwoBackground.jpeg";

const data = {
  articles: {
    firstArticle: {
      title: "Astronauts could land on Red Planet by 2039",
      backgroundImage: articleOneBackground,
      articleExtras: {
        source: "space.com",
        publishTimeAgo: "20m",
        topic: "science",
      },
    },
    secondArticle: {
      title: "Arctic sea ice extent hits record low for winter maximum",
      backgroundImage: articleTwoBackground,
      articleExtras: {
        source: "CNN",
        publishTimeAgo: "1h",
        topic: "environment",
      },
    },
  },
  weather: {
    state: "mostly-cloudy",
    location: "new york",
    hours: {
      6: "54",
      9: "60",
      12: "65",
      14: "70",
      17: "64",
      18: "68",
      19: "70",
      24: "60",
    },
    days: {
      today: "76",
      tomorrow: "70",
      week: "65",
    },
  },
  stocks: {
    "10-05-2022": {
      nasdaq: {
        id: "nasdaq",
        name: "NASDAQ",
        price: 5055.53,
        low: 126.88,
        high: 127.61,
        open: 127.48,
        marketCap: "735.34B",
        dividend: "1.63%",
        peratio: "5.83",
        change: "-20.85%",
      },
      appl: {
        id: "appl",
        name: "APPL",
        price: 354.53,
        low: 61.88,
        high: 293.61,
        open: 156.48,
        marketCap: "143.34B",
        dividend: "2.63%",
        peratio: "25.83",
        change: "-3.85%",
      },
      dow3: {
        id: "dow3",
        name: "DOW 3",
        price: 403.53,
        low: 126.88,
        high: 127.61,
        open: 127.48,
        marketCap: "500.34B",
        dividend: "3.63%",
        peratio: "34.83",
        change: "-0.5%",
      },
      goog: {
        id: "goog",
        name: "GOOG",
        price: 143.53,
        low: 50.88,
        high: 42.61,
        open: 30.48,
        marketCap: "735.34B",
        dividend: "1.63%",
        peratio: "15.83",
        change: "-2.85%",
      },
    },
  },
  scores: {
    leagues: [
      {
        title: "NHL",
        matches: [
          {
            team1: {
              name: "Canadiens",
              city: "Montreal",
              score: 0,
            },
            team2: {
              name: "Senators",
              city: "Ottawa",
              score: 1,
            },
          },
        ],
      },
      {
        title: "Stanley Cup Playoffs",
        matches: [
          {
            team1: {
              name: "Blues",
              city: "Winnipeg",
              score: 0,
            },
            team2: {
              name: "Wild",
              city: "St. Louis",
              score: 1,
            },
          },
        ],
      },
    ],
  },
};

function Home() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <div className="home">
      <Navbar profileImageSrc={profileImage} toggleDrawer={toggleDrawer} />
      <Layout data={data} />
      {drawerIsOpen && <Drawer toggleDrawer={toggleDrawer} />}
      <Footer />
    </div>
  );
}

export default Home;
