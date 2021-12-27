import React, {useContext, useEffect} from "react";
import bgImg from "../../Assets/background.png";
import FormResetPassword from "../../Components/FormResetPassword";
import { Container } from "../Login/style";



const ResetPassword = () => {
    return (
        <Container backgroundImg={bgImg}>
                <FormResetPassword />
      </Container>
    );
}

export default ResetPassword;