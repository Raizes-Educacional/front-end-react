import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: linear-gradient(135deg,#5139a8, #1b48f2, #64b5f6 );
    @media screen and (max-width: 600px){
        background: #ffff;
    }
    @media screen and (max-width: 380px){
        margin: auto;
    }
`;
export const WrapperChild = styled.div`
    margin: 60px;
    background-color: #fff;
    padding: 40px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    @media screen and (max-width: 600px){
        margin: 0;
        padding: 10px
    }
    @media screen and (max-width: 600px){
        margin: auto ;
    }
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ContainerLogotipoTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const LogotipoRaizesImagem = styled.img`
    max-height: 100px;
    max-width: 100%;
    margin: auto;

`
export const Title = styled.h1`
    font-family: 'Roboto';
    text-align:center;

`
export const WrapperStepOne = styled.div`
    margin: 40px;
    p{
        font-family: 'Roboto', sans-serif;
        margin-bottom: 30px;
        font-weight: 400;
    }
    @media screen and (max-width: 350px){
        margin: 20px;
    }
`
export const MarginElements = styled.div`
    margin-bottom: 30px;
    h1{
        font-size: 24px;
    }
`
export const ContainerForm = styled.div`
    background: red;
    div{
        width: 100%;
    }
`
export const Father = styled.div`
    form{
        width:100% !important;
    }
`

