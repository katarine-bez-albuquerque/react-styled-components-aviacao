import Header from "componentes/Header";
import Imagem from "componentes/Imagem";
import { Imagens } from "componentes/ImagensGlobais";
import Link from "componentes/Link";
import Texto from "componentes/Texto";
import Titulo from "componentes/Titulo";
import { 
    SecaoFotos, 
    SecaoApresentacao, 
    SecaoTipos,
    SecaoTextoImagem,
    SecaoImagens,
    SecaoDeTexto,
    Banner,
} from "./EstilosHome";
import Footer from "componentes/Footer";

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <SecaoFotos>
                    <Imagem
                        src={ Imagens.imagem0 }
                        alt="Imagem 1"
                    />
                    <Imagem
                        src={ Imagens.imagem2 }
                        alt="Imagem 2"
                    />
                    <Imagem
                        src={ Imagens.imagem3 }
                        alt="Imagem 3"
                    />
                </SecaoFotos>

                <SecaoApresentacao>
                    <Titulo>Sobre a Aviação</Titulo>
                    <Texto>
                        Segundo o site <Link href="https://pt.wikipedia.org/wiki/Avia%C3%A7%C3%A3o">Wikipédia</Link>, aviação significa atividade científico-tecnológica, econômica e de transportes, com objetivo de estudo, desenvolvimento e exploração dos aeródinos, sinônimo de aeronáutica. Aeronáutica significa "navegação aérea". Atualmente, a aviação pode ser considerada uma indústria global, sendo operada por empresas do setor.
                    </Texto>
                </SecaoApresentacao>

                <SecaoTipos>
                    <article>
                        <Imagem
                            src={ Imagens.imagem4 }
                            alt="Tipos de Aviação"
                        />
                    </article>
                    <article>
                        <Titulo>Tipos Aviação</Titulo>
                        <Texto>
                        Civil, Desportiva, Militar, Regular, Não-regular, Comercial, Geral, Agrícola.
                        </Texto>
                    </article>
                </SecaoTipos>

                <SecaoTextoImagem>
                    <article>
                        <section>
                            <Titulo>Primeiras Máquinas Voadoras</Titulo>
                            <Texto>
                                Segundo o site <Link href="https://pt.wikipedia.org/wiki/Avia%C3%A7%C3%A3o">Wikipédia</Link>, o primeiro vôo foi em 17 de dezembro de 1903, mas sem testemunhas e da mídia com ajuda de uma catapulta. Antes, em 9 de outubro de 1890, o engenheiro francês Clément Ader alegou ter percorrido 50 metros a uma altura de 20 centímetros em sua aeronave a vapor chamada "Ader Éole", porém sem testemunhas.
                            </Texto>
                            <Texto>
                                Segundo o site, em 23 de Outubro de 1906, Alberto Santos-Dumont realizou o vôo em um aparelho mais pesado que o ar, com presença de testemunhas e membros da mídia, sendo registrado na época. O primeiro voo confirmado na presença da media dos Wright foi realizado em 1908.
                            </Texto>
                        </section>
                        
                        <SecaoImagens>
                            <Imagem
                                src={ Imagens.imagem5 }
                                alt="Imagem 5"
                            />
                            <Imagem
                                src={ Imagens.imagem6 }
                                alt="Imagem 6"
                            />
                            <Imagem
                                src={ Imagens.imagem7 }
                                alt="Imagem 7"
                            />
                            <Imagem
                                src={ Imagens.imagem8 }
                                alt="Imagem 8"
                            />
                        </SecaoImagens>
                    </article>                    
                </SecaoTextoImagem>

                <SecaoTipos>
                    <article className="imagem_bloco">
                        <Imagem
                            src={ Imagens.imagem9 }
                            alt="Importância da Aviação"
                        />
                    </article>
                    <article className="bloco">
                        <Titulo>Importância da Aviação</Titulo>
                        <Texto>
                            O papel da aviação mais importante é na economia brasileira e mundial, conectando pessoas do mundo no turismo e no comércio.
                        </Texto>
                    </article>
                </SecaoTipos>

                <SecaoTipos>                    
                    <article className="bloco">
                        <Titulo>Alfabeto da Aviação</Titulo>
                        <Texto>
                            Conhecido como alfabeto aeronaútico ou alfabeto fonético da aviação, o chamado alfabeto fonético da Otan, sendo utilizado mundialmente pela aeronáutica e utilizado na comunicação e identificação da aeronave.
                        </Texto>
                    </article>
                    <article className="imagem_bloco">
                        <Imagem
                            src={ Imagens.imagem10 }
                            alt="Alfabeto da Aviação"
                        />
                    </article>
                </SecaoTipos>
            </main>
            <aside>
                <SecaoDeTexto>
                    <article>
                        <Titulo>Escala Aérea</Titulo>
                        <Texto> 
                            A Escala é a parada do avião em uma cidade que não é o seu destino final. Já a Conexão é quando uma pessoa precisa descer para pegar outra aeronave.
                        </Texto>
                    </article>                    
                </SecaoDeTexto>
                <Banner>
                    <Imagem
                        src={ Imagens.imagem11 }
                        alt="Banner 1"
                    />
                    <Imagem
                        src={ Imagens.imagem12 }
                        alt="Banner 3"
                    />                  
                </Banner>
            </aside>
            <Footer />
        </>
    );
}

export default Home;