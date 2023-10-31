import styled from "styled-components";


export const NavbarEstilo = styled.section `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    nav {
        width: 100%;
        max-width: 1200px;
        height: 100px;
        padding: 10px 50px;
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;  
    }

    .logo {
            width: 170px;
            height: auto;
    }

    .social {
            width: 45px;
            height: 45px;
            margin: 5px;
    }

    @media(max-width: 786px) {
        nav {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }
    }
`;

