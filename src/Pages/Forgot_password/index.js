import React, {useContext, useEffect} from "react";
import bgImg from "../../Assets/background.png";
import FormforgotPassword from "../../Components/FormForgotPassword";
import { Container } from "../Login/style";



const ForgotPassword = () => {
    return (
        <Container backgroundImg={bgImg}>
                <FormforgotPassword />
      </Container>
    );
}

export default ForgotPassword;