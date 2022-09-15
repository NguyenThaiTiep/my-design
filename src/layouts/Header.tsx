import React from "react";
import { Container, NavLink, Row } from "react-bootstrap";
import { AppLogo } from "../components";
import { styled } from "../configs";

const WrapHeader = styled("div", {
  height: 80,
  py: 10,
  px: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ListNavItem = styled("div", {
  display: "flex",
  columnGap: 25,
});

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
    <WrapHeader>
      <AppLogo />
      <ListNavItem>
        {sections.map(({ name, id }) => (
          <NavItem key={id}>{name}</NavItem>
        ))}
      </ListNavItem>
    </WrapHeader>
  );
};

export default Header;
