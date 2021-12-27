import React from "react";

import Logo from "../../Assets/Logo.png";

import { Instagram, Linkedin, Facebook, Youtube, ArrowUpCircle } from 'react-feather';

import { 
  Container,
  TexteContact,
  Textlanguage,
  Contact,
  Top,
  Line,
  Logoredes,
  Icons,
  Iconitem,
  Image,
  Copy 

} from "./style.js";

const Footer = () => {
  return (
    <Container id="footer">

      <TexteContact>
        <Textlanguage>
          <h1>Inspire-se, inove e</h1>
          <h1 className="h1-verde">transforme o mundo!</h1>
        </Textlanguage>
        <Contact>
          <h3>Fale Conosco</h3>
          <h4>contato@ludz.one</h4>
        </Contact>
      </TexteContact>

      <Top><a href="#"><ArrowUpCircle color="white" size={40}/></a></Top>
      
      <Line></Line>

      <Logoredes>
        <a id="ilogo" href="/">
          <Image
            alt=""
            src={Logo}
          />
        </a>
        <Icons>
          <Iconitem href="/"><Instagram color="white" size={24}/></Iconitem>
          <Iconitem href="/"><Linkedin color="white" size={24} /></Iconitem>
          <Iconitem href="/"><Facebook color="white" size={24} /></Iconitem>
          <Iconitem href="/"><Youtube color="white" size={24}/></Iconitem>
        </Icons>
      </Logoredes>

      <Copy><p>&copy; Copyright 2021. Todos os direitos reservados ao Ludz.One.</p></Copy>
    </Container>
  );
};

export default Footer;
