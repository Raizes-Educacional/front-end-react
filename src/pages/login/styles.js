import styledComponents from "styled-components";

export const Container = styledComponents.section`
    & {
        background: linear-gradient(135deg,#5139a8, #1b48f2, #64b5f6 );
        height:  100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
`;
export const ContainerFlex = styledComponents.div`
    background: #fff;
    max-width: 100%;
    padding: 40px;
    height: 70vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 400px){
        height: 100%;
        width: 100%;
    }
`;
export const Form = styledComponents.form`
    display: flex;
    flex-direction: column;

    p {
        margin: 0;
        text-align: center;
        font-family: 'Roboto', sans-serif !important;
        font-size: 18px;
        padding: 5px;
        font-weight: 300;

    }
    p a{
        color: #1B48F2;
        font-family: 'Roboto', sans-serif !important;
        text-decoration: none;
    }
    button{
        margin-top: 10%;
    }
`;
export const InputFormLogin = styledComponents.input`
    border: 1px solid #383838;
    margin-top: 5%;
    font-size: 20px;
    font-family: 'Roboto', sans-serif !important;
    padding: 12px;
    width: 300px;
`;
export const Logotipo = styledComponents.img`
    width: 300px;
    height: 20%;
    margin: 10%;
    position: relativa;
    top: 0px;
     @media screen and (max-width: 400px){
        height: none;
        width: 100%;
    }
`