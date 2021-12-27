import React from "react";

import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

//Imports de Images
import Img1 from "../../Assets/home1.png";
import Img2 from "../../Assets/home2.png";
import Img3 from "../../Assets/Print1.png";
import Img4 from "../../Assets/print2.png";
import Img5 from "../../Assets/Print3.png";
import Img6 from "../../Assets/Print4Atualizado.png";

import { 
  Container, 
  Section1,
  Text1,
  Section2,
  Text2,
  Section3,
  Text3,
  Section4,
  Text4,
  Section5,
  Text5,
  Section6,
  Registration
  
} from "./style";

const Forms = () => {
  return (
    <>
      <Menu />
      <Container>
        <Section1 id="section1">
            <img id="img1" src={Img1} alt="home1"/>
            <Text1>
              <h1>Quem nunca teve uma grande ideia?</h1>
              <p>Eu sei que você já teve uma ideia. E ai? Conseguiu colocar para frente? Não? Eu sei! Realmente é difícil colocar uma ideia para frente sem saber por onde começar e sem ajuda. Por isso estamos aqui, para te fazer aprender e realizar.</p>
            </Text1>
            <img id="img2"  src={Img2} alt="home2"/>
        </Section1>

        <Section2 id="section2">
          <img src={Img3} alt="Print1"/>
          <Text2>
            <h1>Tecnologia para <br/> auxiliar na sua <br/>jornada de aprendizado</h1>
            <p>Organize os projetos por sala de aula com nossa ferramenta de gestão, aprenda enquanto desenvolve.</p>
          </Text2>
        </Section2>

        <Section3 id="section3">
          <img src={Img4} alt="print2"/>
          <Text3>
            <h1>Crie experiências envolventes e inspiradoras</h1>
            <p>Convide amigos e desenvolva projetos inovadores em ambientes colaborativos e educativos</p>
          </Text3>
        </Section3>

        <Section4 id="section4">
          <img src={Img5} alt="Print3"/>
          <Text4>
            <h1>Aqui você é o protagonista</h1>
            <p>Sugira um problema, investigue, estabeleça um plano e execute com sua equipe. Nós te ajudamos.</p>
          </Text4>
        </Section4>

        <Section5 id="section5">
          <img src={Img6} alt="Print4"/>
          <Text5>
            <h1>Transforme o mundo com sua solução</h1>
            <p>Encontre uma oportunidade de negócio e a desenvolva com seus amigos.</p>
          </Text5>
        </Section5>
        <Section6>
          <h1>Vamos Começar a Diversão?</h1>
          <Link style={{ textDecoration: "none" }} to="/cadastro">
            <Registration>Cadastre-se</Registration>
          </Link>
        </Section6>
      </Container>
      <Footer />
    </>
  );
};

export default Forms;
