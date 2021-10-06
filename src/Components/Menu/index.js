import React, { useState } from "react";

import { HamburgerButton } from "react-hamburger-button";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Logo.PNG";

import {
  Container,
  Image,
  NavBar,
  NavBarItem,
  HamburgerStyle,
  WrapSigns,
  WrapLeftMenu,
  Login
} from "./style.js";

const Menu = () => {
  let [enabled, setEnabled] = useState(false);

  return (
    <Container>
      <HamburgerStyle enable={enabled}>
        <HamburgerButton
          open={enabled}
          onClick={() => setEnabled(!enabled)}
          width={25}
          height={15}
          strokeWidth={3}
          color='white'
          borderRadius={5}
          animationDuration={0.5}
        />
      </HamburgerStyle>
      <WrapLeftMenu>
        <a style={{ alignSelf: "center" }} href="/">
          <Image
            alt=""
            src={Logo}
          />
        </a>
        <NavBar enable={enabled}>
          <NavBarItem href="#section1">Home</NavBarItem>
          <NavBarItem href="#section2">Solução</NavBarItem>
          <NavBarItem href="#section3">Produtos</NavBarItem>
          <NavBarItem href="#section4">Contatos</NavBarItem>
        </NavBar>
      </WrapLeftMenu>
      <WrapSigns>
        <Link style={{ textDecoration: "none" }} to="/login">
          <Login>Entrar</Login>
        </Link>
      </WrapSigns>
    </Container>
  );
};

export default Menu;
