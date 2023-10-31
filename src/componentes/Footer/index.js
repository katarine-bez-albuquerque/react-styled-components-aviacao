import Texto from "componentes/Texto";
import { FooterEstilo } from "./FooterEstilo";

const Footer = () => {
    return(
        <FooterEstilo>
            <Texto>KBA Digital</Texto>
            <Texto>@2023</Texto>
        </FooterEstilo>        
    );
}

export default Footer;