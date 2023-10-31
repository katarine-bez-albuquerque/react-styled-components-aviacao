import Navbar from "componentes/Navbar";
import { HeaderEstilo } from "./HeaderEstilo";
import SuperTitulo from "componentes/SuperTítulo";

const Header = () => {
    return(
        <HeaderEstilo>
            <Navbar />
            <br/>
            <SuperTitulo>Aviação</SuperTitulo>
            <br/>
        </HeaderEstilo>
    );
}

export default Header;