import React from "react";
import { Col, Row } from "react-bootstrap";
import { Flex, FooterLogo } from "../components";
import { styled } from "../configs";

import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import lineIcon from "../assets/line.png";
import { Image } from "../components/Image";

const socials = [
  {
    icon: facebookIcon,
    href: "",
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
  padding: 10,
  px: 100,
});

const Logo = styled(FooterLogo, {
  minWidth: 100,
  marginRight: 20,
});

const Footer = () => {
  return (
    <FooterWraper>
      <Flex align="end" wrap="wrap">
        <Col md={2} xs={12}>
          <Logo />
        </Col>
        <Col md={10} xs={12}>
          <Flex css={{ flexGrow: 1 }} wrap="wrap">
            <Col md={8} xs={12}>
              <Flex gap="s8" wrap="wrap">
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
    </FooterWraper>
  );
};

const Socials = () => {
  return (
    <Flex css={{ gap: 15 }} jusity="end" align="end">
      {socials.map(({ icon }, index) => (
        <a key={index}>
          <Image src={icon} width={40} height={40} />
        </a>
      ))}
    </Flex>
  );
};

export default Footer;
