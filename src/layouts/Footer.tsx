import React from "react";
import { Col, Row } from "react-bootstrap";
import { FooterLogo } from "../components";
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

const Flex = styled("div", {
  display: "flex",
  variants: {
    jusity: {
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
  },
});

const Logo = styled(FooterLogo, {
  minWidth: 100,
  marginRight: 20,
});

const ContactContent = styled(Flex, {
  flexGrow: 1,
});
const Content = styled("div", {
  display: "flex",
  alignItems: "end",
});

const Footer = () => {
  return (
    <FooterWraper>
      <Content>
        <Col md={2}>
          <Logo />
        </Col>

        <ContactContent>
          <Col md={8}>
            <Flex css={{ gap: 10 }}>
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
          <Col md={4}>
            <Socials />
          </Col>
        </ContactContent>
      </Content>
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
