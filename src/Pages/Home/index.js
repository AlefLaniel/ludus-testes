import React from "react";

import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

//Imports de Images
import Img1 from "../../Assets/figura1-rf.png";
import Img2 from "../../Assets/figura2-rf.png";
import Img3 from "../../Assets/figura3-rf.png";
import Img4 from "../../Assets/figura4-rf.png";
import Img5 from "../../Assets/figura5-rf.png";

import { 
  Container, 
  Section1,
  Text1,
  Section2,
  Text2,
  Section3,
  Text3,
  Section4,
  Text4
  
} from "./style";

const Forms = () => {
  return (
    <>
      <Menu />
      <Container>
        <Section1 id="section1">
            <img id="img1" src={Img1} alt="Figura-1"/>
            <Text1>
              <h1>IMAGINE UM <br/>LUGAR…</h1>
              <p>…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma <br/> comunidade artística mundial.<br/> 
Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna <br/> fácil conversar todos os dias e socializar com mais frequência.</p>
            </Text1>
            <img id="img2"  src={Img2} alt="Figura-2"/>
        </Section1>

        <Section2 id="section2">
          <img src={Img3} alt="Figura-3"/>
          <Text2>
            <h1>Crie um espaço <br/> controlado por <br/> convite onde você se <br/> sinta em casa</h1>
            <p>Os servidores Ludus são organizados em  canais com tópicos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.</p>
          </Text2>
        </Section2>

        <Section3 id="section3">
          <img src={Img5} alt="Figura-5"/>
          <Text3>
            <h1>Aqui é fácil se <br/> encontrar</h1>
            <p>Entre no canal de voz quando estiver à toa.  Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.</p>
          </Text3>
        </Section3>

        <Section4 id="section4">
          <img src={Img4} alt="Figura-4"/>
          <Text4>
            <h1>1914 translation by H. Rackham</h1>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
          </Text4>
        </Section4>
      </Container>
      <Footer />
    </>
  );
};

export default Forms;
