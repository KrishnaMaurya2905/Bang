import React, { useRef } from "react";
import Footer from "../Components/Footer";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import OurStories from "../Components/OurStories";
import Wbo from "../Components/Wbo";
import Collaborators from "../Components/Collaborators";

import HistoryPage from "../Components/HistoryPage";
const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} data-scroll-container>
        <LandingPage />

        <HomePagePoduct />
        <HomePageVideo />
        <Wbo />
        <OurStories />
        <HistoryPage />
        <Collaborators />
        <Footer />
    </div>
  );
};
export default Home;
