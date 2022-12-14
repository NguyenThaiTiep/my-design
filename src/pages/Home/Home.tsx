import React, { useEffect, useState } from "react";
import { Box, Image } from "../../components";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import Introduction from "./Introduction";
import Reference from "./Reference";
import Service from "./Service";
import WhySection from "./WhySection";
import arrowDownImage from "../../assets/arow-down.png";
import { styled } from "../../configs";
import { scrollIntoView } from "../../utils/scroll";

const ScrollToTop = styled(
  ({ ...props }) => {
    const [show, setShow] = useState(window.screenY > 400);
    const onSroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", onSroll);
      return () => {
        window.removeEventListener("onSroll", onSroll);
      };
    }, []);

    return (
      show && (
        <button
          {...props}
          onClick={() => scrollIntoView("root")}
          data-aso="fade-in"
        >
          <Image src={arrowDownImage} width="30" />
        </button>
      )
    );
  },
  {
    all: "unset",
    backgroundColor: "#73b6f161",
    position: "fixed",
    bottom: 20,
    right: 20,
    transform: "all 2s linear",
    padding: "$s16",
    borderRadius: 9999,
  }
);

const Home = () => {
  return (
    <Box id="home" pb="s80">
      <Introduction />
      <Reference />
      <About />
      <Service />
      <WhySection />
      <ContactUs />
      <ScrollToTop />
    </Box>
  );
};

export default Home;
