import styled from "styled-components";

export const SecaoFotos = styled.section `
    width: 100%;
    max-width: 1200px;
    padding: 40px 50px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    img {
        width: 32.5%;
        height: 440px;
        object-fit: cover;
        object-position: center;
    }

    img:hover {
        position: relative;
        top: -5px;
        transition: all 2.5.s ease;
    }

    @media (max-width: 786px) {
        padding: 40px 20px;
        justify-content: center;
        img {
            width: 250px;
            height: 250px;
        }
    } 
`;

export const SecaoApresentacao = styled.section `
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 40px 50px;
    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;

    h3 {
        color: #FF0000;
    }

    p {
        color: rgba(0, 0, 0, 0.6);
    }
    
    a,
    a:link,
    a:visited,
    a:active {
        color: #1634CC;
    }

    @media (max-width: 786px) {
        padding: 40px 20px;
    } 
`;

export const SecaoTipos = styled.section `
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 40px 50px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: #FF0000;
    }

    p {
        color: rgba(0, 0, 0, 0.6);
        padding: 10px;
    }

    img {
        width: 450px;
        height: 400px;
        object-fit: cover;
        object-position: center;
    }

    article {
        width: 50%;
        height: auto;
        text-align: center;
    }

    @media (max-width: 786px) {
        padding: 40px 20px;
        justify-content: center;
        .imagem_bloco {
            order: 1;
        }
        .bloco {
            order: 2;
        }
        img {
            width: 250px;
            height: 250px;
        }
        article {
            width: 100%;
            height: auto;
            padding-top: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
    } 
`;

export const SecaoTextoImagem = styled.section `
    width: 100%;
    height: auto;
    text-align: center;
    background-color: rgba(255, 127, 80, 0.2);

    h3 {
        color: #1634CC;
    }

    p {
        color: rgba(0, 0, 0, 0.6);
    }

    img {
        width: 450px;
        height: 400px;
        object-fit: cover;
        object-position: center;
    }

    article {
        width: 100%;
        max-width: 1200px;
        height: auto;
        padding: 60px 50px;
        box-sizing: border-box;
        margin: 0 auto;
    }

    @media (max-width: 786px) {        
        justify-content: center;

        article {
            padding: 40px 20px;
        }
        
        img {
            width: 250px;
            height: 250px;
        }
    } 
`;

export const SecaoImagens = styled.section `
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 40px 0px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;    
    
    img {
        width: 265px;
        height: 265px;
        object-fit: cover;
        object-position: center;        
    }

    img:hover {
        position: relative;
        top: -5px;
        transition: all 2.5.s ease;
    }

    @media (max-width: 786px) {
        padding: 40px 20px;
        justify-content: center;
        img {
            width: 250px;
            height: 250px;
        }
    } 
`;


export const SecaoDeTexto = styled.section `
    width: 100%;
    height: auto;
    text-align: center;
    background-color: rgba(255, 215, 0, 0.4); 

    h3 {
        color: #1634CC;
    }

    p {
        color: rgba(0, 0, 0, 0.6);
    }

    img {
        width: 450px;
        height: 400px;
        object-fit: cover;
        object-position: center;
    }

    article {
        width: 100%;
        max-width: 1200px;
        height: auto;
        padding: 60px 50px;
        box-sizing: border-box;
        margin: 0 auto;
    }

    @media (max-width: 786px) {        
        justify-content: center;
        
        article {
            padding: 40px 20px;
        }
        img {
            width: 250px;
            height: 250px;
        }
    } 
`;

export const Banner = styled.article `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 50%;
        height: 400px;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 786px) {
        img {
            width: 50%;
            height: 250px;
        }
    } 
`; 
