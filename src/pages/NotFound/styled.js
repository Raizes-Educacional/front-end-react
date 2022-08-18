import styledComponents from "styled-components";

export const Container = styledComponents.div`
    widht: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LogoRaizes = styledComponents.img`
    max-height: 15vh;

`;
export const FlexContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: #383838;
        font-size: 200px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif !important;

    }
    h3{
        color: #383838;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif !important;
    }
`;
