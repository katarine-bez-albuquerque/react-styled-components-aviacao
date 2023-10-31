import styled from "styled-components";

export const FooterEstilo = styled.section `
    width: 100%;
    height: auto;
    padding: 10px 50px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    justify-content: center;
    align-items: center;
    background-color: #FFEF99;

    p {
        color: #1634CC;
        font-weight: 700;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 786px) {
        padding: 40px 20px;
    } 
`;