import React from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "./Banner";
import DateAndVenue from "./DateAndVenue";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import OurStory from "./OurStory";
import RSVP from "./RSVP";
import { Particles } from "./styles";
import TheBride from "./TheBride";

const Home = () => {
  const [query] = useSearchParams();
  const guest = query.get("guest");
  return (
    <>
      <Particles>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </Particles>
      <Hero guest={guest} />
      <TheBride />
      <OurStory />
      <Gallery />
      <Banner />
      <DateAndVenue />
      <RSVP guest={guest} />
      <Footer />
    </>
  );
};

export default Home;
