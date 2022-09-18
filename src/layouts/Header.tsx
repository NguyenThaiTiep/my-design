import React from "react";
import { NavLink, Row } from "react-bootstrap";
import { AppLogo, Box, Flex, Container } from "../components";
import { styled } from "../configs";

const WrapHeader = styled(Flex, {
  height: 80,
});

const ListNavItem = styled(Flex, {});

const NavItem = styled("a", {
  all: "unset",
  fontSize: 18,
  fontWeight: 500,
  color: "#5A5A5A",
  textDecoration: "none",
  cursor: "pointer",
  textTransform: "uppercase",

  "&:hover": {
    color: "#17AA9D",
  },
});

export const sections = [
  {
    title: "",
    name: "Home",
    id: "home",
  },
  {
    title: "",
    name: "About",
    id: "about",
  },
  {
    title: "Service",
    name: "Service",
    id: "service",
  },
  {
    title: "Contact",
    name: "Contact",
    id: "contact",
  },
];
const Header = () => {
  return (
    <WrapHeader py="s8">
      <Container fluid>
        <Flex align="center" jusity="between" wrap="wrap" block>
          <Box>
            <AppLogo />
          </Box>
          <ListNavItem
            gapX={{ "@md": "s24", "@xs": "s8" }}
            block={{
              "@xs": true,
              "@md": false,
            }}
          >
            {sections.map(({ name, id }) => (
              <NavItem key={id}>{name}</NavItem>
            ))}
          </ListNavItem>
        </Flex>
      </Container>
    </WrapHeader>
  );
};

export default Header;
