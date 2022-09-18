import React from "react";
import { Box } from "../../components";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import Introduction from "./Introduction";
import Reference from "./Reference";
import Service from "./Service";
import WhySection from "./WhySection";

const Home = () => {
  return (
    <Box id="home" pb="s80">
      <Introduction />
      <Reference />
      <About />
      <Service />
      <WhySection />
      <ContactUs />
    </Box>
  );
};

export default Home;
