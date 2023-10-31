import Imagem from "componentes/Imagem";
import Link from "componentes/Link";
import { Imagens } from '../ImagensGlobais';
import { NavbarEstilo } from "./NavbarEstilo";


const Navbar = () => {
    return(
        <NavbarEstilo>
            <nav>
                <Imagem
                classe="logo"
                    src={ Imagens.logo }
                    alt="Logo"
                />
                <section>
                    <Link href="https://www.linkedin.com/in/katarine-albuquerque/">
                        <Imagem
                            classe="social"
                            src={ Imagens.linkedin }
                            alt="Linkedin"
                        />
                    </Link>
                    <Link href="https://github.com/katarineBAlbuquerque">
                        <Imagem
                            classe="social"
                            src={ Imagens.github }
                            alt="Github"
                        />
                    </Link>
                </section>
            </nav>
        </NavbarEstilo>        
    );
}

export default Navbar;