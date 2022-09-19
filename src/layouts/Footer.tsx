import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container, Flex, FooterLogo } from "../components";
import { styled } from "../configs";

import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import lineIcon from "../assets/line.png";
import { Image } from "../components/Image";
import { Toaster } from "react-hot-toast";

const socials = [
  {
    icon: facebookIcon,
    href: "https://www.facebook.com/MY-Design-111581465011685",
  },
  {
    icon: instagramIcon,
    href: "",
  },
  {
    icon: lineIcon,
    href: "",
  },
];

const FooterWraper = styled("div", {
  backgroundColor: "$secondary",
  py: "$s32",
});

const Logo = styled(FooterLogo, {
  minWidth: 100,
});

const Footer = () => {
  return (
    <FooterWraper>
      <Container fluid py="s8">
        <Flex align="end" wrap="wrap" gapY="s16">
          <Col xxl={2} md={3} xs={12} style={{ textAlign: "center" }}>
            <Logo />
          </Col>
          <Col xxl={10} md={9} xs={12}>
            <Flex css={{ flexGrow: 1 }} wrap="wrap" px="s16">
              <Col md={8} xs={12}>
                <Flex gapX="s32" gapY="s16" wrap="wrap">
                  <div>
                    <div>(+84)917273737</div>
                    <div>18B Hoang Quoc Viet, Cau Giay, Viet Nam </div>
                  </div>
                  <div>
                    <div>info@mydesign.com </div>
                    <div>www.mydesign.com </div>
                  </div>
                </Flex>
              </Col>
              <Col md={4} xs={12}>
                <Socials />
              </Col>
            </Flex>
          </Col>
        </Flex>
      </Container>
      <Toaster position="top-center" />
    </FooterWraper>
  );
};

const Socials = () => {
  return (
    <Flex gap="s48" jusity="end" align="end">
      {socials.map(({ icon, href }, index) => (
        <a key={index} href={href} target="_blank">
          <Image src={icon} width={40} height={40} />
        </a>
      ))}
    </Flex>
  );
};

export default Footer;
