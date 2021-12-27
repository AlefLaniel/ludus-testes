import React, { useState } from "react";

import { HamburgerButton } from "react-hamburger-button";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Logo1.png";

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
          <NavBarItem href="#section2">Entenda como Funciona</NavBarItem>
          <NavBarItem>
            <Link style={{ textDecoration: "none" }} to="/cadastro">Cadastre-se</Link>
          </NavBarItem>
          <NavBarItem href="#footer">Contato</NavBarItem>
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
