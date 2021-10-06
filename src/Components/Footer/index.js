import React from "react";

import Logo from "../../Assets/Logo.PNG";
import Flag from "../../Assets/brasil.png";

import { Instagram, Linkedin, Facebook, Youtube } from 'react-feather';

import { 
  Container,
  Textlanguage,
  Selectlanguage,
  Links,
  Grouplink,
  Line,
  Logoredes,
  Icons,
  Iconitem,
  Image,
  Copy 

} from "./style.js";

const Footer = () => {
  return (
    <Container>
      <Textlanguage>
        <h1>Todos Somos <br/> Ludus</h1>
        <Selectlanguage>
          <img src={Flag} alt=""/>
          <select>
            <option value="Linguagem">Linguagem</option>
            <option selected="2" value="Português do Brasil">Português do Brasil</option>
            <option value="Inglês, USA">Inglês, USA</option>
            <option value="Français">Français</option>
          </select>
        </Selectlanguage>
      </Textlanguage>

      <Links>
        <Grouplink>
          <p>Produtos</p>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
        </Grouplink>
        <Grouplink>
        <p>Recursos</p>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
        </Grouplink>
        <Grouplink>
        <p>Políticas</p>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
        </Grouplink>
        <Grouplink>
        <p>Parcerias</p>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
          <a href="/">Teste</a>
        </Grouplink>
      </Links>

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

      <Copy><p>&copy; Copyright 2021. Todos os direitos reservados ao Ludus.</p></Copy>
    </Container>
  );
};

export default Footer;
